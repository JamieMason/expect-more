import gen = require('../../../src/lib/gen');

it('returns incomplete copies of basic arrays', () => {
  expect(gen.missingBranches([1, 2, 3]).permutations).toEqual([undefined]);
});

it('returns incomplete copies of basic objects', () => {
  expect(gen.missingBranches({ a: 1, b: 2, c: 3 }).permutations).toEqual([undefined]);
});

it('returns incomplete copies of arrays of objects', () => {
  expect(gen.missingBranches([{ a: 1 }, { b: 2 }]).permutations).toEqual([undefined, [{ b: 2 }], [{ a: 1 }]]);
});

it('returns incomplete copies of indexes of arrays', () => {
  expect(gen.missingBranches({ a: [1], b: [2] }).permutations).toEqual([undefined, { b: [2] }, { a: [1] }]);
});

it('returns incomplete copies of nested objects', () => {
  expect(gen.missingBranches({ a: { b: { c: 1 } } }).permutations).toEqual([undefined, {}, { a: {} }]);
});

it('returns incomplete copies of nested objects containing arrays', () => {
  expect(gen.missingBranches({ a: { b: { c: [1, 2] } } }).permutations).toEqual([
    undefined,
    {},
    { a: {} },
    { a: { b: {} } },
  ]);
});

it('returns incomplete copies of nested arrays', () => {
  expect(gen.missingBranches([1, [2, [3]]]).permutations).toEqual([undefined, [1], [1, [2]]]);
});
