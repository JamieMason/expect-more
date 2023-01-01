import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDivisibleBy()', () => {
  expect(12).toBeDivisibleBy(2);
});

it('provides global.expect().not.toBeDivisibleBy()', () => {
  expect(() => expect(12).not.toBeDivisibleBy(2)).toThrow();
});

it('provides global.expect.toBeDivisibleBy()', () => {
  expect(12).toEqual(expect.toBeDivisibleBy(2));
});

it('provides expect().toBeDivisibleBy()', () => {
  esmExpect(12).toBeDivisibleBy(2);
});

it('provides expect().not.toBeDivisibleBy()', () => {
  esmExpect(() => esmExpect(12).not.toBeDivisibleBy(2)).toThrow();
});

it('provides expect.toBeDivisibleBy()', () => {
  esmExpect(12).toEqual(esmExpect.toBeDivisibleBy(2));
});
