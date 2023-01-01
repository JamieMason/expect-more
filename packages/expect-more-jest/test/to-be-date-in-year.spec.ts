import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDateInYear()', () => {
  expect(new Date('2021-08-29')).toBeDateInYear(2021);
});

it('provides global.expect().not.toBeDateInYear()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateInYear(2021)).toThrow();
});

it('provides global.expect.toBeDateInYear()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateInYear(2021));
});

it('provides expect().toBeDateInYear()', () => {
  esmExpect(new Date('2021-08-29')).toBeDateInYear(2021);
});

it('provides expect().not.toBeDateInYear()', () => {
  esmExpect(() => esmExpect(new Date('2021-08-29')).not.toBeDateInYear(2021)).toThrow();
});

it('provides expect.toBeDateInYear()', () => {
  esmExpect(new Date('2021-08-29')).toEqual(esmExpect.toBeDateInYear(2021));
});
