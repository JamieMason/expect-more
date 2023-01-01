import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeNil()', () => {
  expect(undefined).toBeNil();
});

it('provides global.expect().not.toBeNil()', () => {
  expect(() => expect(undefined).not.toBeNil()).toThrow();
});

it('provides global.expect.toBeNil()', () => {
  expect(undefined).toEqual(expect.toBeNil());
});

it('provides expect().toBeNil()', () => {
  esmExpect(undefined).toBeNil();
});

it('provides expect().not.toBeNil()', () => {
  esmExpect(() => esmExpect(undefined).not.toBeNil()).toThrow();
});

it('provides expect.toBeNil()', () => {
  esmExpect(undefined).toEqual(esmExpect.toBeNil());
});
