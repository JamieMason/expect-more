import { nonEmptyArrays, notNonEmptyArrays } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is an array with at least one member', nonEmptyArrays, (value) => {
  expect(api.isNonEmptyArray(value)).toEqual(true);
});

check.it('rejects otherwise', notNonEmptyArrays, (value) => {
  expect(api.isNonEmptyArray(value)).toEqual(false);
});
