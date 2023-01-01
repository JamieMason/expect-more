import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toEndWith()', () => {
  expect('JavaScript').toEndWith('Script');
});

it('provides global.expect().not.toEndWith()', () => {
  expect(() => expect('JavaScript').not.toEndWith('Script')).toThrow();
});

it('provides global.expect.toEndWith()', () => {
  expect('JavaScript').toEqual(expect.toEndWith('Script'));
});

it('provides expect().toEndWith()', () => {
  esmExpect('JavaScript').toEndWith('Script');
});

it('provides expect().not.toEndWith()', () => {
  esmExpect(() => esmExpect('JavaScript').not.toEndWith('Script')).toThrow();
});

it('provides expect.toEndWith()', () => {
  esmExpect('JavaScript').toEqual(esmExpect.toEndWith('Script'));
});
