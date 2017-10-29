import * as api from '../src';
import { arrayOfBooleans, notArrayOfBooleans } from './lib/fixtures';

check.it('accepts if value is a non-empty array containing only booleans', arrayOfBooleans, (value) => {
  expect(api.isArrayOfBooleans(value)).toEqual(true);
});

check.it('rejects otherwise', notArrayOfBooleans, (value) => {
  expect(api.isArrayOfBooleans(value)).toEqual(false);
});
