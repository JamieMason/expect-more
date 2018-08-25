import { dates, notValidDates } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is an instance of Date and its date is valid', dates, (value) => {
  expect(api.isValidDate(value)).toEqual(true);
});

check.it('rejects otherwise', notValidDates, (value) => {
  expect(api.isValidDate(value)).toEqual(false);
});
