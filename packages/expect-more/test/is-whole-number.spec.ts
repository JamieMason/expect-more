import { notWholeNumbers, wholeNumbers } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a number with no decimal places', wholeNumbers, (value) => {
  expect(api.isWholeNumber(value)).toEqual(true);
});

check.it('rejects otherwise', notWholeNumbers, (value) => {
  expect(api.isWholeNumber(value)).toEqual(false);
});
