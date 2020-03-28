import * as fs from 'fs';

export const generateJestMatcher = (file) => {
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
