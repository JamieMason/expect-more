import api = require('../src');

it('passes when any of the listed values are somewhere in the given array', () => {
  const sameInstance = {};
  expect(api.isArrayIncludingAnyOf([1, 2, 3], [1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1, 2, 3], [2])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1, 2, 3], [3])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1])([1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1], [1, 1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([sameInstance], [3, 2, sameInstance])).toEqual(true);
});

it('rejects otherwise', () => {
  const reference1 = {};
  const reference2 = {};
  expect(api.isArrayIncludingAnyOf([reference1], [reference2])).toEqual(false);
  expect(api.isArrayIncludingAnyOf([1], [2, 3])).toEqual(false);
});
