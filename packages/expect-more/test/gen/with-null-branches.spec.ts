import gen = require('../../src/gen');

it('returns incomplete copies of basic arrays', () => {
  expect(Array.from(gen.withNullBranches([1, 2, 3]))).toEqual([null]);
});

it('returns incomplete copies of basic objects', () => {
  expect(Array.from(gen.withNullBranches({ a: 1, b: 2, c: 3 }))).toEqual([null]);
});

it('returns incomplete copies of arrays of objects', () => {
  expect(Array.from(gen.withNullBranches([{ a: 1 }, { b: 2 }]))).toEqual([null, [null, { b: 2 }], [{ a: 1 }, null]]);
});

it('returns incomplete copies of indexes of arrays', () => {
  expect(Array.from(gen.withNullBranches({ a: [1], b: [2] }))).toEqual([
    null,
    { a: null, b: [2] },
    { a: [1], b: null },
  ]);
});

it('returns incomplete copies of nested objects', () => {
  expect(Array.from(gen.withNullBranches({ a: { b: { c: 1 } } }))).toEqual([null, { a: null }, { a: { b: null } }]);
});

it('returns incomplete copies of nested objects containing arrays', () => {
  expect(Array.from(gen.withNullBranches({ a: { b: { c: [1, 2] } } }))).toEqual([
    null,
    { a: null },
    { a: { b: null } },
    { a: { b: { c: null } } },
  ]);
});

it('returns incomplete copies of nested arrays', () => {
  expect(Array.from(gen.withNullBranches([1, [2, [3]]]))).toEqual([null, [1, null], [1, [2, null]]]);
});
