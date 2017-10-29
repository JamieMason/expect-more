import { arrays, notArrays } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is an array', arrays, (value) => {
  expect(api.isArray(value)).toEqual(true);
});

check.it('rejects otherwise', notArrays, (value) => {
  expect(api.isArray(value)).toEqual(false);
});
