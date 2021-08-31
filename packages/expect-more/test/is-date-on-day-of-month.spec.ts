import api = require('../src');
import { notDates } from '../../../test/fixtures';

it('passes when the date in local time falls on the given day (or "date") of the month', () => {
  expect(api.isDateOnDayOfMonth(1, new Date('1960-01-01'))).toEqual(true);
  expect(api.isDateOnDayOfMonth(5, new Date('2021-03-05'))).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.isDateOnDayOfMonth(12, new Date('1960-01-01'))).toEqual(false);
  expect(api.isDateOnDayOfMonth(3, new Date('2021-03-05'))).toEqual(false);
});

check.it('rejects non-date values', notDates, (value) => {
  expect(api.isDateOnDayOfMonth(5, value)).toEqual(false);
});
