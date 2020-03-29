import * as fs from 'fs';
import { FileMeta } from '.';

export const generateJestMemberMatcherTest = (file: FileMeta) => {
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
