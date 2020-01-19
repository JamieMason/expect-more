const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const getFiles = (dirPath) =>
  fs
    .readdirSync(dirPath)
    .filter(
      (filename) =>
        filename.endsWith('.ts') &&
        !filename.endsWith('index.ts') &&
        !filename.endsWith('typings.ts'),
    )
    .map((filename) => path.resolve(dirPath, filename));

const rootDir = path.resolve(__dirname, '..');
const expectMorePath = path.resolve(rootDir, './packages/expect-more/src');
const expectMoreJestPath = path.resolve(rootDir, './packages/expect-more-jest/src');
const expectMoreLibPath = path.resolve(expectMorePath, './lib');
const rootFilePaths = getFiles(expectMorePath);
const libFilePaths = getFiles(expectMoreLibPath);
const allFilePaths = [...rootFilePaths, ...libFilePaths];

const camelToKebab = (camel) => camel.replace(/[A-Z]/g, (a) => `-${a.toLowerCase()}`);

const isAllowableJestMatcher = ({ jsDoc }) =>
  jsDoc.matcherName.search(
    /^(toBeGreaterThanOrEqualTo|toBeLessThanOrEqualTo|toBeNear|toBeNull|toBeUndefined|toHaveMember|toThrowAnyError|toThrowErrorOfType)$/,
  ) === -1;

const isAllowableJestMemberMatcher = ({ jsDoc }) =>
  jsDoc.memberMatcherName.search(
    /^(toHaveMethodThrowingAnyError|toHaveMethodThrowingErrorOfType|toHaveNestedMember)$/,
  ) === -1;

const isExportedVariable = (node) =>
  node.kind === ts.SyntaxKind.VariableStatement &&
  node.modifiers &&
  node.modifiers[0] &&
  node.modifiers[0].kind === ts.SyntaxKind.ExportKeyword;

const options = {};
const program = ts.createProgram(allFilePaths, options);
const checker = program.getTypeChecker();

const isCurriedFn = (variableDeclaration) =>
  variableDeclaration.type &&
  Array.isArray(variableDeclaration.type.members) &&
  variableDeclaration.type.members.length > 1;

const isUnaryfunction = (variableDeclaration) =>
  variableDeclaration.initializer &&
  variableDeclaration.initializer.kind === ts.SyntaxKind.ArrowFunction;

const isHasTypeFunction = (variableDeclaration) =>
  variableDeclaration.initializer &&
  variableDeclaration.initializer.expression &&
  variableDeclaration.initializer.expression.text === 'hasType';

const getSignature = (variableDeclaration) => {
  if (isCurriedFn(variableDeclaration)) {
    const signature = variableDeclaration.type.members[0].getText();
    return signature;
  } else if (isUnaryfunction(variableDeclaration)) {
    const init = variableDeclaration.initializer;
    const inTypes = init.parameters.map((param) => param.getText());
    const outType = init.type.getText();
    const signature = `(${inTypes.join(', ')}) => ${outType}`;
    return signature;
  } else if (isHasTypeFunction(variableDeclaration)) {
    const init = variableDeclaration.initializer;
    const outType = init.typeArguments[0].getText();
    const signature = `(value: any) => value is ${outType}`;
    return signature;
  } else {
    throw new Error('Unrecognise Signature');
  }
};

const getArgumentTypes = (variableDeclaration) => {
  if (isCurriedFn(variableDeclaration)) {
    const signature = variableDeclaration.type.members[0].parameters.map((parameter) =>
      parameter.getText(),
    );
    return signature;
  } else if (isUnaryfunction(variableDeclaration)) {
    const signature = variableDeclaration.initializer.parameters.map((param) => param.getText());
    return signature;
  } else if (isHasTypeFunction(variableDeclaration)) {
    return ['value: any'];
  } else {
    throw new Error('Unrecognised Signature');
  }
};

const getJestMatcherPath = (matcherName) =>
  path.resolve(expectMoreJestPath, `./${camelToKebab(matcherName)}.ts`);
const getJestMatcherTestPath = (matcherName) =>
  path.resolve(expectMoreJestPath, `../test/${camelToKebab(matcherName)}.spec.ts`);

const unwrap = (string) => (string ? string.replace(/\n/g, ' ') : '');

const getMetadata = (filePath) => {
  const result = { filePath };
  const sourceFile = program.getSourceFile(filePath);

  const visitNode = (node) => {
    if (node.jsDoc) {
      const [jsDocComment] = node.jsDoc;
      result.jsDoc = { description: unwrap(jsDocComment.comment), params: [] };
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

const generateJestMatcher = (file) => {
  try {
    const { jestMatcherPath, jsDoc, matcherInputs, matcherInputsWithoutTypes, name } = file;
    const { description, matcherMessage, matcherName, matcherNotMessage, params } = jsDoc;

    const argsForMatcherInterface = matcherInputs.join(', ');
    const typedArgsForMatcherFunction = ['value: any'].concat(matcherInputs).join(', ');
    const argsForAssertFunction = matcherInputsWithoutTypes.concat('value').join(', ');

    const valueExample = params.find(({ name }) => name === 'value').exampleValue;
    const argsExamples = params
      .filter(({ name }) => name !== 'value')
      .map(({ exampleValue }) => exampleValue);
    const argsExamplesSource = argsExamples.join(', ');

    const source = `
import { ${name} } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * ${description}
       * @example
       * expect(${valueExample}).${matcherName}(${argsExamplesSource});
       */
      ${matcherName}(${argsForMatcherInterface}): R;
    }
    interface Expect {
      /**
       * ${description}
       * @example
       * expect(${valueExample}).toEqual(
       *   expect.${matcherName}(${argsExamplesSource})
       * );
       */
      ${matcherName}<T>(${argsForMatcherInterface}): JestMatchers<T>;
    }
  }
}

export const ${matcherName}Matcher = (${typedArgsForMatcherFunction}) => createResult({
  message: () => \`${matcherMessage}\`,
  notMessage: () => \`${matcherNotMessage}\`,
  pass: ${name}(${argsForAssertFunction})
});

expect.extend({ ${matcherName}: ${matcherName}Matcher });
`;

    fs.writeFileSync(jestMatcherPath, source, 'utf8');
  } catch (err) {
    console.error('FAIL:', file);
    throw err;
  }
};

const generateJestMatcherTest = (file) => {
  const { jestMatcherTestPath, jsDoc } = file;
  const { matcherName, params } = jsDoc;

  let comment = '';
  let valueExample = params.find(({ name }) => name === 'value').exampleValue;

  if (matcherName === 'toBeAsyncFunction') {
    comment = '// eval is workaround for typescript converting async to non-async';
    valueExample = "eval('(async (_) => _)')";
  } else if (matcherName === 'toBeGeneratorFunction') {
    comment = '// eval is workaround for typescript converting generator fns';
    valueExample = "eval('(function*() {yield 2;})')";
  }

  const argsExamples = params
    .filter(({ name }) => name !== 'value')
    .map(({ exampleValue }) => exampleValue);
  const argsExamplesSource = argsExamples.join(', ');

  const source = `
${comment}

it('provides expect().${matcherName}()', () => {
  expect(${valueExample}).${matcherName}(${argsExamplesSource});
});

it('provides expect().not.${matcherName}()', () => {
  expect(() => expect(${valueExample}).not.${matcherName}(${argsExamplesSource})).toThrow();
});

it('provides expect.${matcherName}()', () => {
  expect(${valueExample}).toEqual(expect.${matcherName}(${argsExamplesSource}));
});
  `;

  fs.writeFileSync(jestMatcherTestPath, source, 'utf8');
};

const generateJestMemberMatcher = (file) => {
  try {
    const { jestMemberMatcherPath, jsDoc, matcherInputs, matcherInputsWithoutTypes, name } = file;
    const { description, matcherMessage, memberMatcherName, matcherNotMessage, params } = jsDoc;

    const argsForMatcherInterface = ['propPath: string'].concat(matcherInputs).join(', ');
    const typedArgsForMatcherFunction = ['value: any', 'propPath: string']
      .concat(matcherInputs)
      .join(', ');
    const argsForAssertFunction = matcherInputsWithoutTypes
      .concat(`getIn(propPath.split('.'), value)`)
      .join(', ');
    const memberMatcherMessage = matcherMessage.replace(
      'expected ${value}',
      "expected value at '${propPath}'",
    );
    const memberMatcherNotMessage = matcherNotMessage.replace(
      'expected ${value}',
      "expected value at '${propPath}'",
    );

    const valueExample = params.find(({ name }) => name === 'value').exampleValue;
    const argsExamples = params
      .filter(({ name }) => name !== 'value')
      .map(({ exampleValue }) => exampleValue);
    const argsExamplesSource = ["'child.grandchild'"].concat(argsExamples).join(', ');

    const source = `
import { ${name} } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Matchers<R, T> {
      /**
       * ${description}
       * @example
       * expect({ child: { grandchild: ${valueExample} } }).${memberMatcherName}(${argsExamplesSource});
       */
      ${memberMatcherName}(${argsForMatcherInterface}): R;
    }
    interface Expect {
      /**
       * ${description}
       * @example
       * expect(spyFunction).toHaveBeenCalledWith(expect.${memberMatcherName}(${argsExamplesSource}));
       */
      ${memberMatcherName}<T>(${argsForMatcherInterface}): JestMatchers<T>;
    }
  }
}

export const ${memberMatcherName}Matcher = (${typedArgsForMatcherFunction}) => createResult({
  message: () => \`${memberMatcherMessage}\`,
  notMessage: () => \`${memberMatcherNotMessage}\`,
  pass: ${name}(${argsForAssertFunction})
});

expect.extend({ ${memberMatcherName}: ${memberMatcherName}Matcher });
`;

    fs.writeFileSync(jestMemberMatcherPath, source, 'utf8');
  } catch (err) {
    console.error('FAIL:', file);
    throw err;
  }
};

const generateJestMemberMatcherTest = (file) => {
  const { jestMemberMatcherTestPath, jsDoc } = file;
  const { memberMatcherName, params } = jsDoc;

  let comment = '';
  let valueExample = params.find(({ name }) => name === 'value').exampleValue;

  if (memberMatcherName === 'toHaveAsyncFunction') {
    comment = '// eval is workaround for typescript converting async to non-async';
    valueExample = "eval('(async (_) => _)')";
  } else if (memberMatcherName === 'toHaveGeneratorFunction') {
    comment = '// eval is workaround for typescript converting generator fns';
    valueExample = "eval('(function*() {yield 2;})')";
  }

  const valueExampleSource = `{ child: { grandchild: ${valueExample} } }`;
  const argsExamples = params
    .filter(({ name }) => name !== 'value')
    .map(({ exampleValue }) => exampleValue);
  const argsExamplesSource = ["'child.grandchild'"].concat(argsExamples).join(', ');

  const source = `
${comment}

it('provides expect().${memberMatcherName}()', () => {
  expect(${valueExampleSource}).${memberMatcherName}(${argsExamplesSource});
});

it('provides expect().not.${memberMatcherName}()', () => {
  expect(() => expect(${valueExampleSource}).not.${memberMatcherName}(${argsExamplesSource})).toThrow();
});

it('provides expect.${memberMatcherName}()', () => {
  expect(${valueExampleSource}).toEqual(expect.${memberMatcherName}(${argsExamplesSource}));
});
  `;

  fs.writeFileSync(jestMemberMatcherTestPath, source, 'utf8');
};

const toJestExport = (name) => `export { ${name}Matcher } from './${camelToKebab(name)}';`;

const generateJestIndex = (matcherMetadata, memberMatcherMetadata) => {
  const indexPath = path.resolve(expectMoreJestPath, './index.ts');
  const source = []
    .concat(
      matcherMetadata.map((file) => toJestExport(file.jsDoc.matcherName)),
      memberMatcherMetadata.map((file) => toJestExport(file.jsDoc.memberMatcherName)),
    )
    .sort()
    .join('\n');
  fs.writeFileSync(indexPath, source, 'utf8');
};

(() => {
  const allMetadata = rootFilePaths.map(getMetadata);
  const jestMatcherMetadata = allMetadata.filter(isAllowableJestMatcher);
  const jestMemberMatcherMetadata = allMetadata.filter(isAllowableJestMemberMatcher);

  jestMatcherMetadata.forEach(generateJestMatcher);
  jestMatcherMetadata.forEach(generateJestMatcherTest);
  generateJestIndex(jestMatcherMetadata, jestMemberMatcherMetadata);
  jestMemberMatcherMetadata.forEach(generateJestMemberMatcher);
  jestMemberMatcherMetadata.forEach(generateJestMemberMatcherTest);
})();
