import { errorConstructors } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if function throws any type of error when called', errorConstructors, (Err) => {
  expect(
    api.throwsAnyError(() => {
      throw new Err('wut?');
    })
  ).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.throwsAnyError(() => {/*  */})).toEqual(false);
});
