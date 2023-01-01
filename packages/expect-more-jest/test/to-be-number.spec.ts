import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeNumber()', () => {
  expect(8).toBeNumber();
});

it('provides global.expect().not.toBeNumber()', () => {
  expect(() => expect(8).not.toBeNumber()).toThrow();
});

it('provides global.expect.toBeNumber()', () => {
  expect(8).toEqual(expect.toBeNumber());
});

it('provides expect().toBeNumber()', () => {
  esmExpect(8).toBeNumber();
});

it('provides expect().not.toBeNumber()', () => {
  esmExpect(() => esmExpect(8).not.toBeNumber()).toThrow();
});

it('provides expect.toBeNumber()', () => {
  esmExpect(8).toEqual(esmExpect.toBeNumber());
});
