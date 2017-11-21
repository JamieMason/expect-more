import { getIncomplete } from '../../../src/lib/deconstructor';

it('returns incomplete copies of basic arrays', () => {
  expect(getIncomplete([1, 2, 3])).toEqual([[2, 3], [1, 3], [1, 2]]);
});

it('returns incomplete copies of basic objects', () => {
  expect(getIncomplete({ a: 1, b: 2, c: 3 })).toEqual([
    { b: 2, c: 3 },
    { a: 1, c: 3 },
    { a: 1, b: 2 }
  ]);
});

it('returns incomplete copies of arrays of objects', () => {
  expect(getIncomplete([{ a: 1 }, { b: 2 }])).toEqual([
    [{ b: 2 }],
    [{}, { b: 2 }],
    [{ a: 1 }],
    [{ a: 1 }, {}]
  ]);
});

it('returns incomplete copies of indexes of arrays', () => {
  expect(getIncomplete({ a: [1], b: [2] })).toEqual([
    { b: [2] },
    { a: [], b: [2] },
    { a: [1] },
    { a: [1], b: [] }
  ]);
});

it('returns incomplete copies of nested objects', () => {
  expect(getIncomplete({ a: { b: { c: 1 } } })).toEqual([
    {},
    { a: {} },
    { a: { b: {} } }
  ]);
});

it('returns incomplete copies of nested objects containing arrays', () => {
  expect(getIncomplete({ a: { b: { c: [1, 2] } } })).toEqual([
    {},
    { a: {} },
    { a: { b: {} } },
    { a: { b: { c: [2] } } },
    { a: { b: { c: [1] } } }
  ]);
});

it('returns incomplete copies of nested arrays', () => {
  expect(getIncomplete([1, [2, [3]]])).toEqual([
    [[2, [3]]],
    [1],
    [1, [[3]]],
    [1, [2]],
    [1, [2, []]]
  ]);
});
