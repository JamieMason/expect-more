import api = require('../src');

it('passes when a value is null or undefined', () => {
  expect(api.isNil(undefined)).toEqual(true);
  expect(api.isNil(void 0)).toEqual(true);
  expect(api.isNil(null)).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.isNil(0)).toEqual(false);
  expect(api.isNil('')).toEqual(false);
  expect(api.isNil(false)).toEqual(false);
  expect(api.isNil({})).toEqual(false);
});
