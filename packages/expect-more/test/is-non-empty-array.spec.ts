import * as api from '../src';
import { nonEmptyArrays, notNonEmptyArrays } from './lib/fixtures';

check.it('accepts if value is an array with at least one member', nonEmptyArrays, (value) => {
  expect(api.isNonEmptyArray(value)).toEqual(true);
});

check.it('rejects otherwise', notNonEmptyArrays, (value) => {
  expect(api.isNonEmptyArray(value)).toEqual(false);
});
