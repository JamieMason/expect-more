import api = require('../src');
import { notDates } from '../../../test/fixtures';

it('passes when the date in local time falls on the given year', () => {
  expect(api.isDateInYear(1960, new Date('1960-01-01'))).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.isDateInYear(1960, new Date('1961-01-01'))).toEqual(false);
});

check.it('rejects non-date values', notDates, (value) => {
  expect(api.isDateInYear(2021, value)).toEqual(false);
});
