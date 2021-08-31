import api = require('../src');
import { notNumbers } from '../../../test/fixtures';

it('passes when value is a number below or equal to zero', () => {
  expect(api.isNegativeNumber(-1)).toEqual(true);
  expect(api.isNegativeNumber(-0.01)).toEqual(true);
  expect(api.isNegativeNumber(new Number(-0.01))).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.isNegativeNumber(1)).toEqual(false);
  expect(api.isNegativeNumber(0.01)).toEqual(false);
  expect(api.isNegativeNumber(0)).toEqual(false);
  expect(api.isNegativeNumber(-0)).toEqual(false);
});

check.it('rejects values which are not numbers', notNumbers, (value) => {
  expect(api.isNegativeNumber(value)).toEqual(false);
});
