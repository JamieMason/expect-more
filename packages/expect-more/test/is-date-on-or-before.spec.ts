import api = require('../src');
import { notDates } from '../../../test/fixtures';

it('passes when the date in local time falls at the same time or before the given date', () => {
  [
    ['2021-08-31', '2021-08-31'],
    ['2021-08-31', '2021-08-30'],
    ['2021-08-31T11:11:11', '2021-08-30T11:11:11'],
    ['2021-08-31T11:11:12', '2021-08-30T11:11:11'],
  ].forEach(([a, b]) => {
    expect(api.isDateOnOrBefore(new Date(a), new Date(b))).toEqual(true);
  });
});

it('rejects otherwise', () => {
  [
    ['2021-08-31', '2021-09-01'],
    ['2021-08-30T11:11:10', '2021-08-30T11:11:11'],
  ].forEach(([a, b]) => {
    expect(api.isDateOnOrBefore(new Date(a), new Date(b))).toEqual(false);
  });
});

check.it('rejects non-date values', notDates, (value) => {
  expect(api.isDateOnOrBefore(5, value)).toEqual(false);
});
