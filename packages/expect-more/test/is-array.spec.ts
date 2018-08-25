import { arrays, notArrays } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is an array', arrays, (value) => {
  expect(api.isArray(value)).toEqual(true);
});

check.it('rejects otherwise', notArrays, (value) => {
  expect(api.isArray(value)).toEqual(false);
});
