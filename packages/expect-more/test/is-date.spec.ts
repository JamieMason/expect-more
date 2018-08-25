import { dates, notDates } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a date', dates, (value) => {
  expect(api.isDate(value)).toEqual(true);
});

check.it('rejects otherwise', notDates, (value) => {
  expect(api.isDate(value)).toEqual(false);
});
