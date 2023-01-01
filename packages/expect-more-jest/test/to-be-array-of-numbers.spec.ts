import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayOfNumbers()', () => {
  expect([12, 0, 14]).toBeArrayOfNumbers();
});

it('provides global.expect().not.toBeArrayOfNumbers()', () => {
  expect(() => expect([12, 0, 14]).not.toBeArrayOfNumbers()).toThrow();
});

it('provides global.expect.toBeArrayOfNumbers()', () => {
  expect([12, 0, 14]).toEqual(expect.toBeArrayOfNumbers());
});

it('provides expect().toBeArrayOfNumbers()', () => {
  esmExpect([12, 0, 14]).toBeArrayOfNumbers();
});

it('provides expect().not.toBeArrayOfNumbers()', () => {
  esmExpect(() => esmExpect([12, 0, 14]).not.toBeArrayOfNumbers()).toThrow();
});

it('provides expect.toBeArrayOfNumbers()', () => {
  esmExpect([12, 0, 14]).toEqual(esmExpect.toBeArrayOfNumbers());
});
