import { notRegExs, regExs } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a regular expression', regExs, (value) => {
  expect(api.isRegExp(value)).toEqual(true);
});

check.it('rejects otherwise', notRegExs, (value) => {
  expect(api.isRegExp(value)).toEqual(false);
});
