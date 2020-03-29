import { resolve } from 'path';
import ts from 'typescript';
import { generateJestIndex } from './jest-index';
import { generateJestMatcher } from './jest-matcher';
import { generateJestMatcherTest } from './jest-matcher-test';
import { generateJestMemberMatcher } from './jest-member-matcher';
import { generateJestMemberMatcherTest } from './jest-member-matcher-test';
import { allFilePaths, expectMoreJestPath, rootFilePaths } from './paths';

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

export const camelToKebab = (camel) => camel.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);

const isAllowableJestMatcher = ({ jsDoc }) =>
  jsDoc.matcherName.search(
    /^(toBeGreaterThanOrEqualTo|toBeLessThanOrEqualTo|toBeNear|toBeNull|toBeUndefined|toHaveMember|toThrowAnyError|toThrowErrorOfType)$/,
  ) === -1;

const isAllowableJestMemberMatcher = ({ jsDoc }) =>
  jsDoc.memberMatcherName.search(
    /^(toHaveMethodThrowingAnyError|toHaveMethodThrowingErrorOfType|toHaveNestedMember)$/,
  ) === -1;

const isExportedVariable = ({ kind, modifiers }) =>
  kind === ts.SyntaxKind.VariableStatement &&
  modifiers &&
  modifiers[0] &&
  modifiers[0].kind === ts.SyntaxKind.ExportKeyword;

const options = {};
const program = ts.createProgram(allFilePaths, options);

const isCurriedFn = ({ type }) => type && Array.isArray(type.members) && type.members.length > 1;

const isUnaryfunction = ({ initializer }) =>
  initializer && initializer.kind === ts.SyntaxKind.ArrowFunction;

const isHasTypeFunction = ({ initializer }) =>
  initializer && initializer.expression && initializer.expression.text === 'hasType';

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
      const signature = variableDeclaration.type.members[0].getText(sourceFile);
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
      const signature = `(value: any) => value is ${outType}`;
      return signature;
    } else {
      throw new Error('Unrecognised Signature');
    }
  };

  const getArgumentTypes = (variableDeclaration) => {
    if (isCurriedFn(variableDeclaration)) {
      const signature = variableDeclaration.type.members[0].parameters.map((parameter) =>
        parameter.getText(sourceFile),
      );
      return signature;
    } else if (isUnaryfunction(variableDeclaration)) {
      const signature = variableDeclaration.initializer.parameters.map((param) =>
        param.getText(sourceFile),
      );
      return signature;
    } else if (isHasTypeFunction(variableDeclaration)) {
      return ['value: any'];
    } else {
      throw new Error('Unrecognised Signature');
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
      result.jestMatcherPath = getJestMatcherPath(result.jsDoc.matcherName);
      result.jestMatcherTestPath = getJestMatcherTestPath(result.jsDoc.matcherName);
      result.jestMemberMatcherPath = getJestMatcherPath(result.jsDoc.memberMatcherName);
      result.jestMemberMatcherTestPath = getJestMatcherTestPath(result.jsDoc.memberMatcherName);
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
  const jestMatcherMetadata: FileMeta[] = allMetadata.filter(isAllowableJestMatcher);
  const jestMemberMatcherMetadata: FileMeta[] = allMetadata.filter(isAllowableJestMemberMatcher);

  jestMatcherMetadata.forEach(generateJestMatcher);
  jestMatcherMetadata.forEach(generateJestMatcherTest);
  generateJestIndex(jestMatcherMetadata, jestMemberMatcherMetadata);
  jestMemberMatcherMetadata.forEach(generateJestMemberMatcher);
  jestMemberMatcherMetadata.forEach(generateJestMemberMatcherTest);
})();
