import * as api from '../src';
import { arrays, notArrays } from './lib/fixtures';

check.it('accepts if value is an array', arrays, (value) => {
  expect(api.isArray(value)).toEqual(true);
});

check.it('rejects otherwise', notArrays, (value) => {
  expect(api.isArray(value)).toEqual(false);
});
