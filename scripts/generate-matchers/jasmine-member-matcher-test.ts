import * as fs from 'fs';
import { FileMeta } from '.';

export const generateJasmineMemberMatcherTest = (file: FileMeta): void => {
  const { jasmineMemberMatcherTestPath, jsDoc } = file;
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
import 'jasmine';
import 'expect-more-jasmine';

${comment}

it('provides expect().${memberMatcherName}()', () => {
  expect(${valueExampleSource}).${memberMatcherName}(${argsExamplesSource});
});
  `;
  fs.writeFileSync(jasmineMemberMatcherTestPath, source, 'utf8');
};
