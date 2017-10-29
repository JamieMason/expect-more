import * as api from '../src';
import { notObjects, objects } from './lib/fixtures';

check.it('accepts if value is an object', objects, (value) => {
  expect(api.isObject(value)).toEqual(true);
});

check.it('rejects otherwise', notObjects, (value) => {
  expect(api.isObject(value)).toEqual(false);
});
