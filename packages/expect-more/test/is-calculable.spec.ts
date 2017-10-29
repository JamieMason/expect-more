import * as api from '../src';
import { calculables, notCalculables } from './lib/fixtures';

check.it('accepts if value is a value coercable to be used in mathematical operations', calculables, (value) => {
  expect(api.isCalculable(value)).toEqual(true);
});

check.it('rejects otherwise', notCalculables, (value) => {
  expect(api.isCalculable(value)).toEqual(false);
});
