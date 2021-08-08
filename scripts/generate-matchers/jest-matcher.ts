import * as fs from 'fs';
import { FileMeta } from '.';

const withUtil = (_, varName) => {
  const methodName = varName === 'value' ? 'printReceived' : 'printExpected';
  return '${methodName(varName)}'.replace('methodName', methodName).replace('varName', varName);
};

export const generateJestMatcher = (file: FileMeta): void => {
  try {
    const { jestMatcherPath, jsDoc, matcherInputs, matcherInputsWithoutTypes, name } = file;
    const { description, matcherMessage, matcherName, matcherNotMessage, params } = jsDoc;
    const utilImports = matcherInputs.length > 0 ? 'printExpected, printReceived' : 'printReceived';
    const argsForMatcherInterface = matcherInputs.join(', ');
    const typedArgsForMatcherFunction = ['value: unknown'].concat(matcherInputs).join(', ');
    const argsForAssertFunction = matcherInputsWithoutTypes.concat('value').join(', ');
    const valueExample = params.find(({ name }) => name === 'value').exampleValue;
    const argsExamples = params
      .filter(({ name }) => name !== 'value')
      .map(({ exampleValue }) => exampleValue);
    const argsExamplesSource = argsExamples.join(', ');

    const jestMatcherMessage = matcherMessage.replace(/\$\{([a-z]+)\}/gi, withUtil);
    const jestMatcherNotMessage = matcherNotMessage.replace(/\$\{([a-z]+)\}/gi, withUtil);

    const source = `
import { ${name} } from 'expect-more';
import { ${utilImports} } from 'jest-matcher-utils';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Matchers<R> {
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

export const ${matcherName}Matcher = (${typedArgsForMatcherFunction}): jest.CustomMatcherResult => createResult({
  message: () => \`${jestMatcherMessage}\`,
  notMessage: () => \`${jestMatcherNotMessage}\`,
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
