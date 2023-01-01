import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeNegativeNumber()', () => {
  expect(-18).toBeNegativeNumber();
});

it('provides global.expect().not.toBeNegativeNumber()', () => {
  expect(() => expect(-18).not.toBeNegativeNumber()).toThrow();
});

it('provides global.expect.toBeNegativeNumber()', () => {
  expect(-18).toEqual(expect.toBeNegativeNumber());
});

it('provides expect().toBeNegativeNumber()', () => {
  esmExpect(-18).toBeNegativeNumber();
});

it('provides expect().not.toBeNegativeNumber()', () => {
  esmExpect(() => esmExpect(-18).not.toBeNegativeNumber()).toThrow();
});

it('provides expect.toBeNegativeNumber()', () => {
  esmExpect(-18).toEqual(esmExpect.toBeNegativeNumber());
});
