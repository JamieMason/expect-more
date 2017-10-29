import * as api from '../src';
import { notNumbers, numbers } from './lib/fixtures';

check.it('accepts if value is a number', numbers, (value) => {
  expect(api.isNumber(value)).toEqual(true);
});

check.it('rejects otherwise', notNumbers, (value) => {
  expect(api.isNumber(value)).toEqual(false);
});
