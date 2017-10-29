import * as api from '../src';
import { emptyArrays, notEmptyArrays } from './lib/fixtures';

check.it('accepts if value is an empty array', emptyArrays, (value) => {
  expect(api.isEmptyArray(value)).toEqual(true);
});

check.it('rejects otherwise', notEmptyArrays, (value) => {
  expect(api.isEmptyArray(value)).toEqual(false);
});
