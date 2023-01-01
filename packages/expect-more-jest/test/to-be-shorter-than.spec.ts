import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeShorterThan()', () => {
  expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
});

it('provides global.expect().not.toBeShorterThan()', () => {
  expect(() =>
    expect(['i have one item']).not.toBeShorterThan(['i', 'have', 4, 'items']),
  ).toThrow();
});

it('provides global.expect.toBeShorterThan()', () => {
  expect(['i have one item']).toEqual(expect.toBeShorterThan(['i', 'have', 4, 'items']));
});

it('provides expect().toBeShorterThan()', () => {
  esmExpect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
});

it('provides expect().not.toBeShorterThan()', () => {
  esmExpect(() =>
    esmExpect(['i have one item']).not.toBeShorterThan(['i', 'have', 4, 'items']),
  ).toThrow();
});

it('provides expect.toBeShorterThan()', () => {
  esmExpect(['i have one item']).toEqual(esmExpect.toBeShorterThan(['i', 'have', 4, 'items']));
});
