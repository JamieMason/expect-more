import * as fs from 'fs';
import { FileMeta } from '.';

export const generateJasmineMatcherTest = (file: FileMeta): void => {
  const { jasmineMatcherTestPath, jsDoc } = file;
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
import 'jasmine';
import 'expect-more-jasmine';

${comment}

it('provides expect().${matcherName}()', () => {
  expect(${valueExample}).${matcherName}(${argsExamplesSource});
});
  `;
  fs.writeFileSync(jasmineMatcherTestPath, source, 'utf8');
};
