import { arrayOfObjects, notArrayOfObjects } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is a non-empty array containing only objects', arrayOfObjects, (value) => {
  expect(api.isArrayOfObjects(value)).toEqual(true);
});

check.it('rejects otherwise', notArrayOfObjects, (value) => {
  expect(api.isArrayOfObjects(value)).toEqual(false);
});
