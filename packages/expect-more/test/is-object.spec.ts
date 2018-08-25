import { notObjects, objects } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is an object', objects, (value) => {
  expect(api.isObject(value)).toEqual(true);
});

check.it('rejects otherwise', notObjects, (value) => {
  expect(api.isObject(value)).toEqual(false);
});
