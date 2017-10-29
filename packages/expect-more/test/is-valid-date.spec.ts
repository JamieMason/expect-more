import { dates, notValidDates } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is an instance of Date and its date is valid', dates, (value) => {
  expect(api.isValidDate(value)).toEqual(true);
});

check.it('rejects otherwise', notValidDates, (value) => {
  expect(api.isValidDate(value)).toEqual(false);
});
