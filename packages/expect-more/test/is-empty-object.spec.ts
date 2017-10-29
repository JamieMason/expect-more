import { emptyObjects, notEmptyObjects } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is an empty object', emptyObjects, (value) => {
  expect(api.isEmptyObject(value)).toEqual(true);
});

check.it('rejects otherwise', notEmptyObjects, (value) => {
  expect(api.isEmptyObject(value)).toEqual(false);
});
