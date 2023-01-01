import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toStartWith()', () => {
  expect('JavaScript').toStartWith('Java');
});

it('provides global.expect().not.toStartWith()', () => {
  expect(() => expect('JavaScript').not.toStartWith('Java')).toThrow();
});

it('provides global.expect.toStartWith()', () => {
  expect('JavaScript').toEqual(expect.toStartWith('Java'));
});

it('provides expect().toStartWith()', () => {
  esmExpect('JavaScript').toStartWith('Java');
});

it('provides expect().not.toStartWith()', () => {
  esmExpect(() => esmExpect('JavaScript').not.toStartWith('Java')).toThrow();
});

it('provides expect.toStartWith()', () => {
  esmExpect('JavaScript').toEqual(esmExpect.toStartWith('Java'));
});
