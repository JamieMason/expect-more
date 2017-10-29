import * as api from '../src';
import { functions, notFunctions } from './lib/fixtures';

check.it('accepts if value is a function', functions, (value) => {
  expect(api.isFunction(value)).toEqual(true);
});

check.it('rejects otherwise', notFunctions, (value) => {
  expect(api.isFunction(value)).toEqual(false);
});
