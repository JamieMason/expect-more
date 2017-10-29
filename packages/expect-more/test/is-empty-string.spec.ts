import * as api from '../src';
import { emptyStrings, notEmptyStrings } from './lib/fixtures';

check.it('accepts if value is an empty string', emptyStrings, (value) => {
  expect(api.isEmptyString(value)).toEqual(true);
});

check.it('rejects otherwise', notEmptyStrings, (value) => {
  expect(api.isEmptyString(value)).toEqual(false);
});
