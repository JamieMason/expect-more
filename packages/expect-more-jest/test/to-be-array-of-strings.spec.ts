import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayOfStrings()', () => {
  expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
});

it('provides global.expect().not.toBeArrayOfStrings()', () => {
  expect(() => expect(['we', 'are', 'all', 'strings']).not.toBeArrayOfStrings()).toThrow();
});

it('provides global.expect.toBeArrayOfStrings()', () => {
  expect(['we', 'are', 'all', 'strings']).toEqual(expect.toBeArrayOfStrings());
});

it('provides expect().toBeArrayOfStrings()', () => {
  esmExpect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
});

it('provides expect().not.toBeArrayOfStrings()', () => {
  esmExpect(() => esmExpect(['we', 'are', 'all', 'strings']).not.toBeArrayOfStrings()).toThrow();
});

it('provides expect.toBeArrayOfStrings()', () => {
  esmExpect(['we', 'are', 'all', 'strings']).toEqual(esmExpect.toBeArrayOfStrings());
});
