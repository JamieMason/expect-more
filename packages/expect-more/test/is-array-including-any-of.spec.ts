import api = require('../src');

it('passes when any of the listed values are somewhere in the given array', () => {
  const sameInstance = {};
  const asymNumber = { asymmetricMatch: api.isNumber };
  const asymString = { asymmetricMatch: api.isString };
  expect(api.isArrayIncludingAnyOf([1, 2, 3], [1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1, 2, 3], [2])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1, 2, 3], [3])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1])([1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([1], [1, 1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([asymNumber], [1, 1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([asymString, asymNumber], [1, 1])).toEqual(true);
  expect(api.isArrayIncludingAnyOf([sameInstance], [3, 2, sameInstance])).toEqual(true);
});

it('rejects otherwise', () => {
  const reference1 = {};
  const reference2 = {};
  const asymString = { asymmetricMatch: api.isString };
  expect(api.isArrayIncludingAnyOf([reference1], [reference2])).toEqual(false);
  expect(api.isArrayIncludingAnyOf([1], [2, 3])).toEqual(false);
  expect(api.isArrayIncludingAnyOf([asymString], [1, 1])).toEqual(false);
});
