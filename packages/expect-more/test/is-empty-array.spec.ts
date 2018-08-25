import { emptyArrays, notEmptyArrays } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is an empty array', emptyArrays, (value) => {
  expect(api.isEmptyArray(value)).toEqual(true);
});

check.it('rejects otherwise', notEmptyArrays, (value) => {
  expect(api.isEmptyArray(value)).toEqual(false);
});
