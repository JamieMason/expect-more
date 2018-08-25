import { notNumbers, numbers } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a number less than or equal to another', numbers, (value: number) => {
  expect(api.isLessThanOrEqualTo(value)(value - 1)).toEqual(true);
  expect(api.isLessThanOrEqualTo(value, value - 1)).toEqual(true);
  expect(api.isLessThanOrEqualTo(value)(value)).toEqual(true);
  expect(api.isLessThanOrEqualTo(value, value)).toEqual(true);
});

check.it('rejects otherwise', notNumbers, (value) => {
  expect(api.isLessThanOrEqualTo(value)(value)).toEqual(false);
  expect(api.isLessThanOrEqualTo(value, value)).toEqual(false);
});
