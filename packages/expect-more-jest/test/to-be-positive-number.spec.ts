import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBePositiveNumber()', () => {
  expect(5).toBePositiveNumber();
});

it('provides global.expect().not.toBePositiveNumber()', () => {
  expect(() => expect(5).not.toBePositiveNumber()).toThrow();
});

it('provides global.expect.toBePositiveNumber()', () => {
  expect(5).toEqual(expect.toBePositiveNumber());
});

it('provides expect().toBePositiveNumber()', () => {
  esmExpect(5).toBePositiveNumber();
});

it('provides expect().not.toBePositiveNumber()', () => {
  esmExpect(() => esmExpect(5).not.toBePositiveNumber()).toThrow();
});

it('provides expect.toBePositiveNumber()', () => {
  esmExpect(5).toEqual(esmExpect.toBePositiveNumber());
});
