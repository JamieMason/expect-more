import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeFalse()', () => {
  expect(false).toBeFalse();
});

it('provides global.expect().not.toBeFalse()', () => {
  expect(() => expect(false).not.toBeFalse()).toThrow();
});

it('provides global.expect.toBeFalse()', () => {
  expect(false).toEqual(expect.toBeFalse());
});

it('provides expect().toBeFalse()', () => {
  esmExpect(false).toBeFalse();
});

it('provides expect().not.toBeFalse()', () => {
  esmExpect(() => esmExpect(false).not.toBeFalse()).toThrow();
});

it('provides expect.toBeFalse()', () => {
  esmExpect(false).toEqual(esmExpect.toBeFalse());
});
