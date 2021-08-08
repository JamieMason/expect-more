import * as fs from 'fs';
import { FileMeta } from '.';

const withUtil = (_, varName) => {
  const methodName = varName === 'value' ? 'printReceived' : 'printExpected';
  return '${methodName(varName)}'.replace('methodName', methodName).replace('varName', varName);
};

export const generateJasmineMatcher = (file: FileMeta): void => {
  try {
    const { jasmineMatcherPath, jsDoc, matcherInputs, matcherInputsWithoutTypes, name } = file;
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

    const jasmineMatcherMessage = matcherMessage.replace(/\$\{([a-z]+)\}/gi, withUtil);
    const jasmineMatcherNotMessage = matcherNotMessage.replace(/\$\{([a-z]+)\}/gi, withUtil);

    const source = `
import { ${name} } from 'expect-more';
import { ${utilImports} } from 'jest-matcher-utils';

declare global {
  namespace jasmine {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Matchers<T> {
      /**
       * ${description}
       * @example
       * expect(${valueExample}).${matcherName}(${argsExamplesSource});
       */
      ${matcherName}(${argsForMatcherInterface}): boolean;
    }
  }
}

export const ${matcherName}Matcher: jasmine.CustomMatcherFactory = () => {
  return {
    compare(${typedArgsForMatcherFunction}) {
      const pass = ${name}(${argsForAssertFunction});
      const message = pass ? \`${jasmineMatcherNotMessage}\` : \`${jasmineMatcherMessage}\`;
      return { message, pass };
    },
  };
};

beforeAll(() => {
  jasmine.addMatchers({
    ${matcherName}: ${matcherName}Matcher
  });
});
`;
    fs.writeFileSync(jasmineMatcherPath, source, 'utf8');
  } catch (err) {
    console.error('FAIL:', file);
    throw err;
  }
};
