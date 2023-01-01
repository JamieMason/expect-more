import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeEmptyArray()', () => {
  expect([]).toBeEmptyArray();
});

it('provides global.expect().not.toBeEmptyArray()', () => {
  expect(() => expect([]).not.toBeEmptyArray()).toThrow();
});

it('provides global.expect.toBeEmptyArray()', () => {
  expect([]).toEqual(expect.toBeEmptyArray());
});

it('provides expect().toBeEmptyArray()', () => {
  esmExpect([]).toBeEmptyArray();
});

it('provides expect().not.toBeEmptyArray()', () => {
  esmExpect(() => esmExpect([]).not.toBeEmptyArray()).toThrow();
});

it('provides expect.toBeEmptyArray()', () => {
  esmExpect([]).toEqual(esmExpect.toBeEmptyArray());
});
