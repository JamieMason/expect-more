import api = require('../src');
import { notDates } from '../../../test/fixtures';

it('passes when the date in local time falls on or between the given dates', () => {
  [
    ['2021-08-30', '2021-08-31', '2021-08-31'],
    ['2021-08-30', '2021-08-31', '2021-08-30'],
    ['2021-08-30T11:11:11', '2021-08-31T11:11:11', '2021-08-31T11:11:11'],
    ['2021-08-30T11:11:11', '2021-08-31T11:11:11', '2021-08-30T11:11:11'],
    ['2021-08-30T11:11:11.000Z', '2021-08-31T11:11:11.111Z', '2021-08-30T11:11:11.005Z'],
  ].forEach(([floor, ceiling, value]) => {
    expect(api.isDateBetween(new Date(floor), new Date(ceiling), new Date(value))).toEqual(true);
  });
});

it('rejects otherwise', () => {
  [
    ['2021-08-31', '2021-08-30', '2021-08-31'],
    ['2021-08-31', '2021-08-30', '2021-08-30'],
    ['2021-08-31', '2021-08-31', '2021-09-01'],
    ['2021-08-31', '2021-08-30', '2021-08-29'],
    ['2021-08-31', '2021-08-30', '2021-09-01'],
    ['2021-08-31T11:11:11', '2021-08-30T11:11:11', '2021-08-30T11:11:10'],
    ['2021-08-31T11:11:12', '2021-08-30T11:11:11', '2021-08-31T11:11:13'],
  ].forEach(([floor, ceiling, value]) => {
    expect(api.isDateBetween(new Date(floor), new Date(ceiling), new Date(value))).toEqual(false);
  });
});

check.it('rejects non-date values', notDates, (value) => {
  expect(api.isDateBetween(new Date('1970-01-01'), new Date('2021-01-01'), value)).toEqual(false);
});
