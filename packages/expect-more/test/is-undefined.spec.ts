import { notUndefineds, undefineds } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is undefined', undefineds, (value) => {
  expect(api.isUndefined(value)).toEqual(true);
});

check.it('rejects otherwise', notUndefineds, (value) => {
  expect(api.isUndefined(value)).toEqual(false);
});
