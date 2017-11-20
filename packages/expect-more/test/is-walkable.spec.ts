import { notWalkables, walkables } from '../../../test/fixtures';
import * as api from '../src';

check.it('accepts if value is able to have members', walkables, (value) => {
  expect(api.isWalkable(value)).toEqual(true);
});

check.it('rejects otherwise', notWalkables, (value) => {
  expect(api.isWalkable(value)).toEqual(false);
});
