import api = require('../src');

it('passes when all listed values are somewhere in the given array', () => {
  const sameInstance = {};
  const asymNumber = { asymmetricMatch: api.isNumber };
  const asymOddNumber = { asymmetricMatch: api.isOddNumber };
  expect(api.isArrayIncludingAllOf([1], [1])).toEqual(true);
  expect(api.isArrayIncludingAllOf([1], [1, 1, 1])).toEqual(true);
  expect(api.isArrayIncludingAllOf([1])([1])).toEqual(true);
  expect(api.isArrayIncludingAllOf([1], [1, 2])).toEqual(true);
  expect(api.isArrayIncludingAllOf([1, sameInstance], [sameInstance, 1])).toEqual(true);
  expect(api.isArrayIncludingAllOf([asymNumber], [1])).toEqual(true);
  expect(api.isArrayIncludingAllOf([1, asymOddNumber], [1])).toEqual(true);
});

it('rejects otherwise', () => {
  const reference1 = {};
  const reference2 = {};
  expect(api.isArrayIncludingAllOf([reference1], [reference2])).toEqual(false);
  expect(api.isArrayIncludingAllOf([1, 2], [1])).toEqual(false);
  expect(api.isArrayIncludingAllOf([{ asymmetricMatch: api.isString }], [1])).toEqual(false);
});
