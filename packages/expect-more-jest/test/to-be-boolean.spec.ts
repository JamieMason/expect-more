import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeBoolean()', () => {
  expect(false).toBeBoolean();
});

it('provides global.expect().not.toBeBoolean()', () => {
  expect(() => expect(false).not.toBeBoolean()).toThrow();
});

it('provides global.expect.toBeBoolean()', () => {
  expect(false).toEqual(expect.toBeBoolean());
});

it('provides expect().toBeBoolean()', () => {
  esmExpect(false).toBeBoolean();
});

it('provides expect().not.toBeBoolean()', () => {
  esmExpect(() => esmExpect(false).not.toBeBoolean()).toThrow();
});

it('provides expect.toBeBoolean()', () => {
  esmExpect(false).toEqual(esmExpect.toBeBoolean());
});
