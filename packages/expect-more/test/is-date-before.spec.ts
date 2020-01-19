import { dateBefore, notDateBefore } from '../../../test/fixtures';
import api = require('../src');

check.it(
  'accepts if value is a date occurring before the date provided',
  dateBefore,
  ([otherDate, value]) => {
    expect(api.isBefore(otherDate)(value)).toEqual(true);
    expect(api.isBefore(otherDate, value)).toEqual(true);
  },
);

check.it('rejects otherwise', notDateBefore, ([otherDate, value]) => {
  expect(api.isBefore(otherDate)(value)).toEqual(false);
  expect(api.isBefore(otherDate, value)).toEqual(false);
});
