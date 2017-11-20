import { notNumbers, numbers } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is a number greater than or equal to another', numbers, (value: number) => {
  expect(api.isGreaterThanOrEqualTo(value, value + 1)).toEqual(true);
  expect(api.isGreaterThanOrEqualTo(value)(value + 1)).toEqual(true);
  expect(api.isGreaterThanOrEqualTo(value, value)).toEqual(true);
  expect(api.isGreaterThanOrEqualTo(value)(value)).toEqual(true);
});

check.it('rejects otherwise', notNumbers, (value) => {
  expect(api.isGreaterThanOrEqualTo(value, value)).toEqual(false);
  expect(api.isGreaterThanOrEqualTo(value)(value)).toEqual(false);
});
