import * as fs from 'fs';
import { FileMeta } from '.';

export const generateJestMemberMatcher = (file: FileMeta) => {
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
