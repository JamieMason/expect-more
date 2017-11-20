import { notTrues, trues } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is true', trues, (value) => {
  expect(api.isTrue(value)).toEqual(true);
});

check.it('rejects otherwise', notTrues, (value) => {
  expect(api.isTrue(value)).toEqual(false);
});
