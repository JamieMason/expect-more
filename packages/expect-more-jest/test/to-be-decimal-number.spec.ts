import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDecimalNumber()', () => {
  expect(12.55).toBeDecimalNumber();
});

it('provides global.expect().not.toBeDecimalNumber()', () => {
  expect(() => expect(12.55).not.toBeDecimalNumber()).toThrow();
});

it('provides global.expect.toBeDecimalNumber()', () => {
  expect(12.55).toEqual(expect.toBeDecimalNumber());
});

it('provides expect().toBeDecimalNumber()', () => {
  esmExpect(12.55).toBeDecimalNumber();
});

it('provides expect().not.toBeDecimalNumber()', () => {
  esmExpect(() => esmExpect(12.55).not.toBeDecimalNumber()).toThrow();
});

it('provides expect.toBeDecimalNumber()', () => {
  esmExpect(12.55).toEqual(esmExpect.toBeDecimalNumber());
});
