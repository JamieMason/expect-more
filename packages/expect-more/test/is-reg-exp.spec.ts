import { notRegExs, regExs } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is a regular expression', regExs, (value) => {
  expect(api.isRegExp(value)).toEqual(true);
});

check.it('rejects otherwise', notRegExs, (value) => {
  expect(api.isRegExp(value)).toEqual(false);
});
