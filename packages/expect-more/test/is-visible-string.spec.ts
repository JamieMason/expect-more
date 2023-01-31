import { notVisibleStrings, visibleStrings } from '../../../test/fixtures';
import api = require('../src');

check.it(
  'accepts if value is a string with at least one non-whitespace character',
  visibleStrings,
  (value) => {
    expect(api.isVisibleString(value)).toEqual(true);
  },
);

check.it('rejects otherwise', notVisibleStrings, (value) => {
  expect(api.isVisibleString(value)).toEqual(false);
});
