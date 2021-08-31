import api = require('../src');
import { notNumbers } from '../../../test/fixtures';

it('passes when value is a number above or equal to zero', () => {
  expect(api.isPositiveNumber(1)).toEqual(true);
  expect(api.isPositiveNumber(0.01)).toEqual(true);
  expect(api.isPositiveNumber(new Number(0.01))).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.isPositiveNumber(-1)).toEqual(false);
  expect(api.isPositiveNumber(-0.01)).toEqual(false);
  expect(api.isPositiveNumber(0)).toEqual(false);
  expect(api.isPositiveNumber(-0)).toEqual(false);
});

check.it('rejects values which are not numbers', notNumbers, (value) => {
  expect(api.isPositiveNumber(value)).toEqual(false);
});
