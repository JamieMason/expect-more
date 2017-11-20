import { jsonStrings, notJsonStrings } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is a valid JSON string', jsonStrings, (value) => {
  expect(api.isJsonString(value)).toEqual(true);
});

check.it('rejects otherwise', notJsonStrings, (value) => {
  expect(api.isJsonString(value)).toEqual(false);
});
