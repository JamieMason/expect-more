import gen = require('../../src/gen');

it('returns incomplete copies of basic arrays', () => {
  expect(Array.from(gen.withMissingNodes([1, 2, 3]))).toEqual([undefined, [2, 3], [1, 3], [1, 2]]);
});

it('returns incomplete copies of basic objects', () => {
  expect(Array.from(gen.withMissingNodes({ a: 1, b: 2, c: 3 }))).toEqual([
    undefined,
    { b: 2, c: 3 },
    { a: 1, c: 3 },
    { a: 1, b: 2 },
  ]);
});

it('returns incomplete copies of arrays of objects', () => {
  expect(Array.from(gen.withMissingNodes([{ a: 1 }, { b: 2 }]))).toEqual([
    undefined,
    [{ b: 2 }],
    [{}, { b: 2 }],
    [{ a: 1 }],
    [{ a: 1 }, {}],
  ]);
});

it('returns incomplete copies of indexes of arrays', () => {
  expect(Array.from(gen.withMissingNodes({ a: [1], b: [2] }))).toEqual([
    undefined,
    { b: [2] },
    { a: [], b: [2] },
    { a: [1] },
    { a: [1], b: [] },
  ]);
});

it('returns incomplete copies of nested objects', () => {
  expect(Array.from(gen.withMissingNodes({ a: { b: { c: 1 } } }))).toEqual([
    undefined,
    {},
    { a: {} },
    { a: { b: {} } },
  ]);
});

it('returns incomplete copies of nested objects containing arrays', () => {
  expect(Array.from(gen.withMissingNodes({ a: { b: { c: [1, 2] } } }))).toEqual([
    undefined,
    {},
    { a: {} },
    { a: { b: {} } },
    { a: { b: { c: [2] } } },
    { a: { b: { c: [1] } } },
  ]);
});

it('returns incomplete copies of nested arrays', () => {
  expect(Array.from(gen.withMissingNodes([1, [2, [3]]]))).toEqual([
    undefined,
    [[2, [3]]],
    [1],
    [1, [[3]]],
    [1, [2]],
    [1, [2, []]],
  ]);
});
