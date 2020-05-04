import * as fs from 'fs';
import { FileMeta } from '.';

const withUtil = (_, varName) => {
  const methodName = varName === 'value' ? 'printReceived' : 'printExpected';
  return '${methodName(varName)}'.replace('methodName', methodName).replace('varName', varName);
};

export const generateJasmineMemberMatcher = (file: FileMeta) => {
  try {
    const {
      jasmineMemberMatcherPath,
      jsDoc,
      matcherInputs,
      matcherInputsWithoutTypes,
      name,
    } = file;
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

    const jasmineMatcherMessage = memberMatcherMessage.replace(/\$\{([a-z]+)\}/gi, withUtil);
    const jasmineMatcherNotMessage = memberMatcherNotMessage.replace(/\$\{([a-z]+)\}/gi, withUtil);

    const source = `
import { ${name} } from 'expect-more';
import { printExpected } from 'jest-matcher-utils';
import { getIn } from './lib/get-in';

declare global {
  namespace jasmine {
    interface Matchers<T> {
      /**
       * ${description}
       * @example
       * expect({ child: { grandchild: ${valueExample} } }).${memberMatcherName}(${argsExamplesSource});
       */
      ${memberMatcherName}(${argsForMatcherInterface}): boolean;
    }
  }
}

export const ${memberMatcherName}Matcher = () => {
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
    ${memberMatcherName}: ${memberMatcherName}Matcher
  });
});
`;
    fs.writeFileSync(jasmineMemberMatcherPath, source, 'utf8');
  } catch (err) {
    console.error('FAIL:', file);
    throw err;
  }
};
