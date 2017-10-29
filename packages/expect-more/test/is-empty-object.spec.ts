import * as api from '../src';
import { emptyObjects, notEmptyObjects } from './lib/fixtures';

check.it('accepts if value is an empty object', emptyObjects, (value) => {
  expect(api.isEmptyObject(value)).toEqual(true);
});

check.it('rejects otherwise', notEmptyObjects, (value) => {
  expect(api.isEmptyObject(value)).toEqual(false);
});
