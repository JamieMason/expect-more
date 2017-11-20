import { nonEmptyObjects, notNonEmptyObjects } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is an object with at least one member', nonEmptyObjects, (value) => {
  expect(api.isNonEmptyObject(value)).toEqual(true);
});

check.it('rejects otherwise', notNonEmptyObjects, (value) => {
  expect(api.isNonEmptyObject(value)).toEqual(false);
});
