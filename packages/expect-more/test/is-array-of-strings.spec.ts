import { arrayOfStrings, notArrayOfStrings } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is a non-empty array containing only strings', arrayOfStrings, (value) => {
  expect(api.isArrayOfStrings(value)).toEqual(true);
});

check.it('rejects otherwise', notArrayOfStrings, (value) => {
  expect(api.isArrayOfStrings(value)).toEqual(false);
});
