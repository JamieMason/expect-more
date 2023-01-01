import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArray()', () => {
  expect([2, true, 'string']).toBeArray();
});

it('provides global.expect().not.toBeArray()', () => {
  expect(() => expect([2, true, 'string']).not.toBeArray()).toThrow();
});

it('provides global.expect.toBeArray()', () => {
  expect([2, true, 'string']).toEqual(expect.toBeArray());
});

it('provides expect().toBeArray()', () => {
  esmExpect([2, true, 'string']).toBeArray();
});

it('provides expect().not.toBeArray()', () => {
  esmExpect(() => esmExpect([2, true, 'string']).not.toBeArray()).toThrow();
});

it('provides expect.toBeArray()', () => {
  esmExpect([2, true, 'string']).toEqual(esmExpect.toBeArray());
});
