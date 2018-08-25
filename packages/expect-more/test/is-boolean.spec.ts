import { booleans, notBooleans } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a boolean', booleans, (value) => {
  expect(api.isBoolean(value)).toEqual(true);
});

check.it('rejects otherwise', notBooleans, (value) => {
  expect(api.isBoolean(value)).toEqual(false);
});
