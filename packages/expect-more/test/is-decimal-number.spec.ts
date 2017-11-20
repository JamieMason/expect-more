import { decimalNumbers, notDecimalNumbers } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is a number with decimal places', decimalNumbers, (value) => {
  expect(api.isDecimalNumber(value)).toEqual(true);
});

check.it('rejects otherwise', notDecimalNumbers, (value) => {
  expect(api.isDecimalNumber(value)).toEqual(false);
});
