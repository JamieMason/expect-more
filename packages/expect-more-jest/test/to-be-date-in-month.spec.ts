import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDateInMonth()', () => {
  expect(new Date('2021-08-29')).toBeDateInMonth(7);
});

it('provides global.expect().not.toBeDateInMonth()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateInMonth(7)).toThrow();
});

it('provides global.expect.toBeDateInMonth()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateInMonth(7));
});

it('provides expect().toBeDateInMonth()', () => {
  esmExpect(new Date('2021-08-29')).toBeDateInMonth(7);
});

it('provides expect().not.toBeDateInMonth()', () => {
  esmExpect(() => esmExpect(new Date('2021-08-29')).not.toBeDateInMonth(7)).toThrow();
});

it('provides expect.toBeDateInMonth()', () => {
  esmExpect(new Date('2021-08-29')).toEqual(esmExpect.toBeDateInMonth(7));
});
