import { dateAfter, notDateAfter } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a date occurring after the date provided', dateAfter, ([otherDate, value]) => {
  expect(api.isAfter(otherDate)(value)).toEqual(true);
  expect(api.isAfter(otherDate, value)).toEqual(true);
});

check.it('rejects otherwise', notDateAfter, ([otherDate, value]) => {
  expect(api.isAfter(otherDate)(value)).toEqual(false);
  expect(api.isAfter(otherDate, value)).toEqual(false);
});
