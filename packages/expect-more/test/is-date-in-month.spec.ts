import api = require('../src');
import { notDates } from '../../../test/fixtures';

it('passes when the date in local time falls on the given month', () => {
  [
    '2021-01-10',
    '2021-02-10',
    '2021-03-10',
    '2021-04-10',
    '2021-05-10',
    '2021-06-10',
    '2021-07-10',
    '2021-08-10',
    '2021-09-10',
    '2021-10-10',
    '2021-11-10',
    '2021-12-10',
  ].forEach((iso8601, index) => {
    expect(api.isDateInMonth(index, new Date(iso8601))).toEqual(true);
  });
});

it('rejects otherwise', () => {
  expect(api.isDateInMonth(0, new Date('2021-04-10'))).toEqual(false);
});

check.it('rejects non-date values', notDates, (value) => {
  expect(api.isDateInMonth(2, value)).toEqual(false);
});
