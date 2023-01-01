import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeWholeNumber()', () => {
  expect(8).toBeWholeNumber();
});

it('provides global.expect().not.toBeWholeNumber()', () => {
  expect(() => expect(8).not.toBeWholeNumber()).toThrow();
});

it('provides global.expect.toBeWholeNumber()', () => {
  expect(8).toEqual(expect.toBeWholeNumber());
});

it('provides expect().toBeWholeNumber()', () => {
  esmExpect(8).toBeWholeNumber();
});

it('provides expect().not.toBeWholeNumber()', () => {
  esmExpect(() => esmExpect(8).not.toBeWholeNumber()).toThrow();
});

it('provides expect.toBeWholeNumber()', () => {
  esmExpect(8).toEqual(esmExpect.toBeWholeNumber());
});
