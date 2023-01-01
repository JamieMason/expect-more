import * as fs from 'fs';
import { FileMeta } from '.';

export const generateJestMatcherTest = (file: FileMeta): void => {
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
import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';
${comment}

it('provides global.expect().${matcherName}()', () => {
  expect(${valueExample}).${matcherName}(${argsExamplesSource});
});

it('provides global.expect().not.${matcherName}()', () => {
  expect(() => expect(${valueExample}).not.${matcherName}(${argsExamplesSource})).toThrow();
});

it('provides global.expect.${matcherName}()', () => {
  expect(${valueExample}).toEqual(expect.${matcherName}(${argsExamplesSource}));
});

it('provides expect().${matcherName}()', () => {
  esmExpect(${valueExample}).${matcherName}(${argsExamplesSource});
});

it('provides expect().not.${matcherName}()', () => {
  esmExpect(() => esmExpect(${valueExample}).not.${matcherName}(${argsExamplesSource})).toThrow();
});

it('provides expect.${matcherName}()', () => {
  esmExpect(${valueExample}).toEqual(esmExpect.${matcherName}(${argsExamplesSource}));
});
  `;
  fs.writeFileSync(jestMatcherTestPath, source, 'utf8');
};
