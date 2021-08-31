import api = require('../src');
import { notDates } from '../../../test/fixtures';

it('passes when the date in local time falls on the given day of the week', () => {
  expect(api.isDateOnDayOfWeek(5, new Date('1960-01-01'))).toEqual(true);
  expect(api.isDateOnDayOfWeek(5, new Date('2021-03-05'))).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.isDateOnDayOfWeek(0, new Date('1960-01-01'))).toEqual(false);
  expect(api.isDateOnDayOfWeek(6, new Date('2021-03-05'))).toEqual(false);
});

check.it('rejects non-date values', notDates, (value) => {
  expect(api.isDateOnDayOfWeek(5, value)).toEqual(false);
});
