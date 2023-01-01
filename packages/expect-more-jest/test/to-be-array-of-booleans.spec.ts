import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayOfBooleans()', () => {
  expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
});

it('provides global.expect().not.toBeArrayOfBooleans()', () => {
  expect(() => expect([true, false, new Boolean(true)]).not.toBeArrayOfBooleans()).toThrow();
});

it('provides global.expect.toBeArrayOfBooleans()', () => {
  expect([true, false, new Boolean(true)]).toEqual(expect.toBeArrayOfBooleans());
});

it('provides expect().toBeArrayOfBooleans()', () => {
  esmExpect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
});

it('provides expect().not.toBeArrayOfBooleans()', () => {
  esmExpect(() => esmExpect([true, false, new Boolean(true)]).not.toBeArrayOfBooleans()).toThrow();
});

it('provides expect.toBeArrayOfBooleans()', () => {
  esmExpect([true, false, new Boolean(true)]).toEqual(esmExpect.toBeArrayOfBooleans());
});
