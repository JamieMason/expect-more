import { emptyArrays, notEmptyArrays } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is an empty array', emptyArrays, (value) => {
  expect(api.isEmptyArray(value)).toEqual(true);
});

check.it('rejects otherwise', notEmptyArrays, (value) => {
  expect(api.isEmptyArray(value)).toEqual(false);
});
