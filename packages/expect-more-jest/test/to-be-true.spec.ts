import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeTrue()', () => {
  expect(true).toBeTrue();
});

it('provides global.expect().not.toBeTrue()', () => {
  expect(() => expect(true).not.toBeTrue()).toThrow();
});

it('provides global.expect.toBeTrue()', () => {
  expect(true).toEqual(expect.toBeTrue());
});

it('provides expect().toBeTrue()', () => {
  esmExpect(true).toBeTrue();
});

it('provides expect().not.toBeTrue()', () => {
  esmExpect(() => esmExpect(true).not.toBeTrue()).toThrow();
});

it('provides expect.toBeTrue()', () => {
  esmExpect(true).toEqual(esmExpect.toBeTrue());
});
