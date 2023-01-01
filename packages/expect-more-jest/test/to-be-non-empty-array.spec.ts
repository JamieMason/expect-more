import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeNonEmptyArray()', () => {
  expect(['i', 'am not empty']).toBeNonEmptyArray();
});

it('provides global.expect().not.toBeNonEmptyArray()', () => {
  expect(() => expect(['i', 'am not empty']).not.toBeNonEmptyArray()).toThrow();
});

it('provides global.expect.toBeNonEmptyArray()', () => {
  expect(['i', 'am not empty']).toEqual(expect.toBeNonEmptyArray());
});

it('provides expect().toBeNonEmptyArray()', () => {
  esmExpect(['i', 'am not empty']).toBeNonEmptyArray();
});

it('provides expect().not.toBeNonEmptyArray()', () => {
  esmExpect(() => esmExpect(['i', 'am not empty']).not.toBeNonEmptyArray()).toThrow();
});

it('provides expect.toBeNonEmptyArray()', () => {
  esmExpect(['i', 'am not empty']).toEqual(esmExpect.toBeNonEmptyArray());
});
