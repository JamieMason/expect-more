import * as api from '../src';

it('accepts if value is a number in the times table of another', () => {
  expect(api.isDivisibleBy(2, 6)).toEqual(true);
  expect(api.isDivisibleBy(2)(6)).toEqual(true);
});

it('rejects otherwise', () => {
  expect(api.isDivisibleBy(2, 3)).toEqual(false);
  expect(api.isDivisibleBy(2)(3)).toEqual(false);
});
