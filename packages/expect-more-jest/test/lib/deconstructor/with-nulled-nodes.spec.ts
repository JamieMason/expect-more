import { withNulledNodes } from '../../../src/lib/deconstructor';

it('returns incomplete copies of basic arrays', () => {
  expect(withNulledNodes([1, 2, 3])).toEqual([null, [null, 2, 3], [1, null, 3], [1, 2, null]]);
});

it('returns incomplete copies of basic objects', () => {
  expect(withNulledNodes({ a: 1, b: 2, c: 3 })).toEqual([
    null,
    { a: null, b: 2, c: 3 },
    { a: 1, b: null, c: 3 },
    { a: 1, b: 2, c: null }
  ]);
});

it('returns incomplete copies of arrays of objects', () => {
  expect(withNulledNodes([{ a: 1 }, { b: 2 }])).toEqual([
    null,
    [null, { b: 2 }],
    [{ a: null }, { b: 2 }],
    [{ a: 1 }, null],
    [{ a: 1 }, { b: null }]
  ]);
});

it('returns incomplete copies of indexes of arrays', () => {
  expect(withNulledNodes({ a: [1], b: [2] })).toEqual([
    null,
    { a: null, b: [2] },
    { a: [null], b: [2] },
    { a: [1], b: null },
    { a: [1], b: [null] }
  ]);
});

it('returns incomplete copies of nested objects', () => {
  expect(withNulledNodes({ a: { b: { c: 1 } } })).toEqual([
    null,
    { a: null },
    { a: { b: null } },
    { a: { b: { c: null } } }
  ]);
});

it('returns incomplete copies of nested objects containing arrays', () => {
  expect(withNulledNodes({ a: { b: { c: [1, 2] } } })).toEqual([
    null,
    { a: null },
    { a: { b: null } },
    { a: { b: { c: null } } },
    { a: { b: { c: [null, 2] } } },
    { a: { b: { c: [1, null] } } }
  ]);
});

it('returns incomplete copies of nested arrays', () => {
  expect(withNulledNodes([1, [2, [3]]])).toEqual([
    null,
    [null, [2, [3]]],
    [1, null],
    [1, [null, [3]]],
    [1, [2, null]],
    [1, [2, [null]]]
  ]);
});
