import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeOddNumber()', () => {
  expect(5).toBeOddNumber();
});

it('provides global.expect().not.toBeOddNumber()', () => {
  expect(() => expect(5).not.toBeOddNumber()).toThrow();
});

it('provides global.expect.toBeOddNumber()', () => {
  expect(5).toEqual(expect.toBeOddNumber());
});

it('provides expect().toBeOddNumber()', () => {
  esmExpect(5).toBeOddNumber();
});

it('provides expect().not.toBeOddNumber()', () => {
  esmExpect(() => esmExpect(5).not.toBeOddNumber()).toThrow();
});

it('provides expect.toBeOddNumber()', () => {
  esmExpect(5).toEqual(esmExpect.toBeOddNumber());
});
