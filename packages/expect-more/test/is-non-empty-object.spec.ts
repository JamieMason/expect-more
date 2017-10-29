import * as api from '../src';
import { nonEmptyObjects, notNonEmptyObjects } from './lib/fixtures';

check.it('accepts if value is an object with at least one member', nonEmptyObjects, (value) => {
  expect(api.isNonEmptyObject(value)).toEqual(true);
});

check.it('rejects otherwise', notNonEmptyObjects, (value) => {
  expect(api.isNonEmptyObject(value)).toEqual(false);
});
