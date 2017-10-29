import * as api from '../src';
import { arrayOfNumbers, notArrayOfNumbers } from './lib/fixtures';

check.it('accepts if value is a non-empty array containing only numbers', arrayOfNumbers, (value) => {
  expect(api.isArrayOfNumbers(value)).toEqual(true);
});

check.it('rejects otherwise', notArrayOfNumbers, (value) => {
  expect(api.isArrayOfNumbers(value)).toEqual(false);
});
