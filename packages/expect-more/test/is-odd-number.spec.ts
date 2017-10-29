import { notOddNumbers, oddNumbers } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is an odd number', oddNumbers, (value) => {
  expect(api.isOddNumber(value)).toEqual(true);
});

check.it('rejects otherwise', notOddNumbers, (value) => {
  expect(api.isOddNumber(value)).toEqual(false);
});
