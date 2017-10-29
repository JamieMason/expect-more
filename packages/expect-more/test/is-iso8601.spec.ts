import * as api from '../src';
import { iso8601s, notIso8601s } from './lib/fixtures';

check.it('accepts if value is a valid ISO8601 date string', iso8601s, (value) => {
  expect(api.isIso8601(value)).toEqual(true);
});

check.it('rejects otherwise', notIso8601s, (value) => {
  expect(api.isIso8601(value)).toEqual(false);
});
