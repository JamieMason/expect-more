import { endingWith, notEndingWith } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts case-sensitive string ending with another', endingWith, ([otherString, value]) => {
  expect(api.endsWith(otherString)(value)).toEqual(true);
  expect(api.endsWith(otherString, value)).toEqual(true);
});

check.it('rejects otherwise', notEndingWith, ([otherString, value]) => {
  expect(api.endsWith(otherString)(value)).toEqual(false);
  expect(api.endsWith(otherString, value)).toEqual(false);
});
