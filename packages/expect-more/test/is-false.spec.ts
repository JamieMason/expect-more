import { falses, notFalses } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is false', falses, (value) => {
  expect(api.isFalse(value)).toEqual(true);
});

check.it('rejects otherwise', notFalses, (value) => {
  expect(api.isFalse(value)).toEqual(false);
});
