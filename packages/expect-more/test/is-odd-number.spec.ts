import { notOddNumbers, oddNumbers } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is an odd number', oddNumbers, (value) => {
  expect(api.isOddNumber(value)).toEqual(true);
});

check.it('rejects otherwise', notOddNumbers, (value) => {
  expect(api.isOddNumber(value)).toEqual(false);
});
