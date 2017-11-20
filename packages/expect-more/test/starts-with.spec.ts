import { notStartingWith, startingWith } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts case-sensitive string starting with another', startingWith, ([otherString, value]) => {
  expect(api.startsWith(otherString)(value)).toEqual(true);
  expect(api.startsWith(otherString, value)).toEqual(true);
});

check.it('rejects otherwise', notStartingWith, ([otherString, value]) => {
  expect(api.startsWith(otherString)(value)).toEqual(false);
  expect(api.startsWith(otherString, value)).toEqual(false);
});
