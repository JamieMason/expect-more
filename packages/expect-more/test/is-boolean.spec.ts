import * as api from '../src';
import { booleans, notBooleans } from './lib/fixtures';

check.it('accepts if value is a boolean', booleans, (value) => {
  expect(api.isBoolean(value)).toEqual(true);
});

check.it('rejects otherwise', notBooleans, (value) => {
  expect(api.isBoolean(value)).toEqual(false);
});
