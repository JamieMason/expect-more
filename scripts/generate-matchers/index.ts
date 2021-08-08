import { resolve } from 'path';
import ts from 'typescript';
import { generateJasmineIndex } from './jasmine-index';
import { generateJasmineMatcher } from './jasmine-matcher';
import { generateJasmineMemberMatcher } from './jasmine-member-matcher';
import { generateJasmineMatcherTest } from './jasmine-matcher-test';
import { generateJasmineMemberMatcherTest } from './jasmine-member-matcher-test';
import { generateJestIndex } from './jest-index';
import { generateJestMatcher } from './jest-matcher';
import { generateJestMatcherTest } from './jest-matcher-test';
import { allFilePaths, expectMoreJasminePath, expectMoreJestPath, rootFilePaths } from './paths';

export interface FileJsDoc {
  description: string;
  matcherMessage: string;
  matcherName: string;
  matcherNotMessage: string;
  memberMatcherName: string;
  params: Array<{
    name: string;
    exampleValue: string;
  }>;
}

export interface FileMeta {
  filePath: string;
  inputs: string[];
  inputsWithoutTypes: string[];
  jasmineMatcherPath: string;
  jasmineMatcherTestPath: string;
  jasmineMemberMatcherPath: string;
  jasmineMemberMatcherTestPath: string;
  jestMatcherPath: string;
  jestMatcherTestPath: string;
  jestMemberMatcherPath: string;
  jestMemberMatcherTestPath: string;
  jsDoc: FileJsDoc;
  matcherInputs: string[];
  matcherInputsWithoutTypes: string[];
  memberMatcherInputs: string[];
  memberMatcherInputsWithoutTypes: string[];
  name: string;
  signature: string;
}

export const camelToKebab = (camel: string): string =>
  camel.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);

const isAllowableJasmineMatcher = ({ jsDoc }) =>
  jsDoc.matcherName.search(
    /^(toBeGreaterThanOrEqualTo|toBeLessThanOrEqualTo|toBeNear|toBeNull|toBeUndefined|toHaveMember|toThrowAnyError|toThrowErrorOfType|toBeTrue|toBeFalse)$/,
  ) === -1;

const isAllowableJasmineMemberMatcher = ({ jsDoc }) =>
  jsDoc.memberMatcherName.search(
    /^(toHaveMethodThrowingAnyError|toHaveMethodThrowingErrorOfType|toHaveNestedMember)$/,
  ) === -1;

const isAllowableJestMatcher = ({ jsDoc }) =>
  jsDoc.matcherName.search(
    /^(toBeGreaterThanOrEqualTo|toBeLessThanOrEqualTo|toBeNear|toBeNull|toBeUndefined|toHaveMember|toThrowAnyError|toThrowErrorOfType)$/,
  ) === -1;

const isExportedVariable = ({ kind, modifiers }) =>
  kind === ts.SyntaxKind.VariableStatement &&
  modifiers &&
  modifiers[0] &&
  modifiers[0].kind === ts.SyntaxKind.ExportKeyword;

const options = {};
const program = ts.createProgram(allFilePaths, options);

const isCurriedFn = ({ initializer }) =>
  initializer &&
  initializer.expression &&
  initializer.expression.escapedText &&
  initializer.expression.escapedText.startsWith('curry');

const isUnaryfunction = ({ initializer }) =>
  initializer && initializer.kind === ts.SyntaxKind.ArrowFunction;

const isHasTypeFunction = ({ initializer }) =>
  initializer && initializer.expression && initializer.expression.text === 'hasType';

const getJasmineMatcherPath = (matcherName) =>
  resolve(expectMoreJasminePath, `./${camelToKebab(matcherName)}.ts`);

const getJasmineMatcherTestPath = (matcherName) =>
  resolve(expectMoreJasminePath, `../test/${camelToKebab(matcherName)}.spec.ts`);

const getJestMatcherPath = (matcherName) =>
  resolve(expectMoreJestPath, `./${camelToKebab(matcherName)}.ts`);

const getJestMatcherTestPath = (matcherName) =>
  resolve(expectMoreJestPath, `../test/${camelToKebab(matcherName)}.spec.ts`);

const unwrap = (string) => (string ? string.replace(/\n/g, ' ') : '');

const getMetadata = (filePath): FileMeta => {
  const sourceFile = program.getSourceFile(filePath);
  const result: FileMeta = {
    filePath,
    inputs: [],
    inputsWithoutTypes: [],
    jasmineMatcherPath: '',
    jasmineMatcherTestPath: '',
    jasmineMemberMatcherPath: '',
    jasmineMemberMatcherTestPath: '',
    jestMatcherPath: '',
    jestMatcherTestPath: '',
    jestMemberMatcherPath: '',
    jestMemberMatcherTestPath: '',
    jsDoc: {
      description: '',
      matcherMessage: '',
      matcherName: '',
      matcherNotMessage: '',
      memberMatcherName: '',
      params: [],
    },
    matcherInputs: [],
    matcherInputsWithoutTypes: [],
    memberMatcherInputs: [],
    memberMatcherInputsWithoutTypes: [],
    name: '',
    signature: '',
  };

  const getSignature = (variableDeclaration) => {
    if (isCurriedFn(variableDeclaration)) {
      const fn = variableDeclaration.initializer.arguments[0];
      const inTypes = fn.parameters.map((param) => param.getText(sourceFile));
      const outType = fn.type.getText(sourceFile);
      const signature = `(${inTypes.join(', ')}) => ${outType}`;
      return signature;
    } else if (isUnaryfunction(variableDeclaration)) {
      const init = variableDeclaration.initializer;
      const inTypes = init.parameters.map((param) => param.getText(sourceFile));
      const outType = init.type.getText(sourceFile);
      const signature = `(${inTypes.join(', ')}) => ${outType}`;
      return signature;
    } else if (isHasTypeFunction(variableDeclaration)) {
      const init = variableDeclaration.initializer;
      const outType = init.typeArguments[0].getText(sourceFile);
      const signature = `(value: unknown) => value is ${outType}`;
      return signature;
    } else {
      throw new Error(`Unrecognised Signature at ${filePath}`);
    }
  };

  const getArgumentTypes = (variableDeclaration) => {
    if (isCurriedFn(variableDeclaration)) {
      const fn = variableDeclaration.initializer.arguments[0];
      const signature = fn.parameters.map((param) => param.getText(sourceFile));
      return signature;
    } else if (isUnaryfunction(variableDeclaration)) {
      const signature = variableDeclaration.initializer.parameters.map((param) =>
        param.getText(sourceFile),
      );
      return signature;
    } else if (isHasTypeFunction(variableDeclaration)) {
      return ['value: unknown'];
    } else {
      throw new Error(`Unrecognised Signature at ${filePath}`);
    }
  };

  const visitNode = (node) => {
    if (node.jsDoc) {
      const [jsDocComment] = node.jsDoc;
      result.jsDoc.description = unwrap(jsDocComment.comment);
      jsDocComment.tags.forEach(({ comment, name, tagName }) => {
        if (tagName.text === 'param') {
          result.jsDoc.params.push({ name: name.text, exampleValue: unwrap(comment) });
        } else {
          result.jsDoc[tagName.text] = unwrap(comment);
        }
      });
      result.jsDoc.matcherMessage = result.jsDoc.matcherMessage.replace(/`/g, '\\`');
      result.jsDoc.matcherNotMessage = result.jsDoc.matcherNotMessage.replace(/`/g, '\\`');
    }
    if (isExportedVariable(node)) {
      const [variableDeclaration] = node.declarationList.declarations;
      result.name = variableDeclaration.name.text;
      result.signature = getSignature(variableDeclaration);
      result.inputs = getArgumentTypes(variableDeclaration);
      result.jasmineMatcherPath = getJasmineMatcherPath(result.jsDoc.matcherName);
      result.jasmineMatcherTestPath = getJasmineMatcherTestPath(result.jsDoc.matcherName);
      result.jasmineMemberMatcherPath = getJasmineMatcherPath(result.jsDoc.memberMatcherName);
      result.jasmineMemberMatcherTestPath = getJasmineMatcherTestPath(
        result.jsDoc.memberMatcherName,
      );
      result.jestMatcherPath = getJestMatcherPath(result.jsDoc.matcherName);
      result.jestMatcherTestPath = getJestMatcherTestPath(result.jsDoc.matcherName);
      result.matcherInputs = result.inputs.slice(0, result.inputs.length - 1);
      result.memberMatcherInputs = ['propPath: string'].concat(result.matcherInputs);
      result.inputsWithoutTypes = result.inputs.map((withType) => withType.split(':')[0]);
      result.matcherInputsWithoutTypes = result.matcherInputs.map(
        (withType) => withType.split(':')[0],
      );
      result.memberMatcherInputsWithoutTypes = result.memberMatcherInputs.map(
        (withType) => withType.split(':')[0],
      );
    }
    ts.forEachChild(node, visitNode);
  };

  try {
    visitNode(sourceFile);
  } catch (err) {
    console.error('FAIL:', filePath);
    throw err;
  }

  return result;
};

(() => {
  const allMetadata: FileMeta[] = rootFilePaths.map(getMetadata);
  const jasmineMatcherMetadata: FileMeta[] = allMetadata.filter(isAllowableJasmineMatcher);
  const jasmineMemberMatcherMetadata: FileMeta[] = allMetadata.filter(
    isAllowableJasmineMemberMatcher,
  );
  const jestMatcherMetadata: FileMeta[] = allMetadata.filter(isAllowableJestMatcher);

  jasmineMatcherMetadata.forEach(generateJasmineMatcher);
  jasmineMatcherMetadata.forEach(generateJasmineMatcherTest);
  generateJasmineIndex(jasmineMatcherMetadata, jasmineMemberMatcherMetadata);
  jasmineMemberMatcherMetadata.forEach(generateJasmineMemberMatcher);
  jasmineMemberMatcherMetadata.forEach(generateJasmineMemberMatcherTest);

  jestMatcherMetadata.forEach(generateJestMatcher);
  jestMatcherMetadata.forEach(generateJestMatcherTest);
  generateJestIndex();
})();
