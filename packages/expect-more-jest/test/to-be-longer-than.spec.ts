import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeLongerThan()', () => {
  expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
});

it('provides global.expect().not.toBeLongerThan()', () => {
  expect(() => expect(['i', 'have', 3]).not.toBeLongerThan([2, 'items'])).toThrow();
});

it('provides global.expect.toBeLongerThan()', () => {
  expect(['i', 'have', 3]).toEqual(expect.toBeLongerThan([2, 'items']));
});

it('provides expect().toBeLongerThan()', () => {
  esmExpect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
});

it('provides expect().not.toBeLongerThan()', () => {
  esmExpect(() => esmExpect(['i', 'have', 3]).not.toBeLongerThan([2, 'items'])).toThrow();
});

it('provides expect.toBeLongerThan()', () => {
  esmExpect(['i', 'have', 3]).toEqual(esmExpect.toBeLongerThan([2, 'items']));
});
