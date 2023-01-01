import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDateOnDayOfMonth()', () => {
  expect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
});

it('provides global.expect().not.toBeDateOnDayOfMonth()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateOnDayOfMonth(29)).toThrow();
});

it('provides global.expect.toBeDateOnDayOfMonth()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateOnDayOfMonth(29));
});

it('provides expect().toBeDateOnDayOfMonth()', () => {
  esmExpect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
});

it('provides expect().not.toBeDateOnDayOfMonth()', () => {
  esmExpect(() => esmExpect(new Date('2021-08-29')).not.toBeDateOnDayOfMonth(29)).toThrow();
});

it('provides expect.toBeDateOnDayOfMonth()', () => {
  esmExpect(new Date('2021-08-29')).toEqual(esmExpect.toBeDateOnDayOfMonth(29));
});
