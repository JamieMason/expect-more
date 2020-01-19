import gen = require('../../src/gen');

it('returns incomplete copies of basic arrays', () => {
  expect(Array.from(gen.withMissingBranches([1, 2, 3]))).toEqual([undefined]);
});

it('returns incomplete copies of basic objects', () => {
  expect(Array.from(gen.withMissingBranches({ a: 1, b: 2, c: 3 }))).toEqual([undefined]);
});

it('returns incomplete copies of arrays of objects', () => {
  expect(Array.from(gen.withMissingBranches([{ a: 1 }, { b: 2 }]))).toEqual([
    undefined,
    [{ b: 2 }],
    [{ a: 1 }],
  ]);
});

it('returns incomplete copies of indexes of arrays', () => {
  expect(Array.from(gen.withMissingBranches({ a: [1], b: [2] }))).toEqual([
    undefined,
    { b: [2] },
    { a: [1] },
  ]);
});

it('returns incomplete copies of nested objects', () => {
  expect(Array.from(gen.withMissingBranches({ a: { b: { c: 1 } } }))).toEqual([
    undefined,
    {},
    { a: {} },
  ]);
});

it('returns incomplete copies of nested objects containing arrays', () => {
  expect(Array.from(gen.withMissingBranches({ a: { b: { c: [1, 2] } } }))).toEqual([
    undefined,
    {},
    { a: {} },
    { a: { b: {} } },
  ]);
});

it('returns incomplete copies of nested arrays', () => {
  expect(Array.from(gen.withMissingBranches([1, [2, [3]]]))).toEqual([undefined, [1], [1, [2]]]);
});
