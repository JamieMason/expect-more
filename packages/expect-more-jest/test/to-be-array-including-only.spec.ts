import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayIncludingOnly()', () => {
  expect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
});

it('provides global.expect().not.toBeArrayIncludingOnly()', () => {
  expect(() => expect([5, 10, 1]).not.toBeArrayIncludingOnly([1, 5, 10])).toThrow();
});

it('provides global.expect.toBeArrayIncludingOnly()', () => {
  expect([5, 10, 1]).toEqual(expect.toBeArrayIncludingOnly([1, 5, 10]));
});

it('provides expect().toBeArrayIncludingOnly()', () => {
  esmExpect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
});

it('provides expect().not.toBeArrayIncludingOnly()', () => {
  esmExpect(() => esmExpect([5, 10, 1]).not.toBeArrayIncludingOnly([1, 5, 10])).toThrow();
});

it('provides expect.toBeArrayIncludingOnly()', () => {
  esmExpect([5, 10, 1]).toEqual(esmExpect.toBeArrayIncludingOnly([1, 5, 10]));
});
