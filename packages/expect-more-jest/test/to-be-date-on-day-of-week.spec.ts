import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDateOnDayOfWeek()', () => {
  expect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
});

it('provides global.expect().not.toBeDateOnDayOfWeek()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateOnDayOfWeek(0)).toThrow();
});

it('provides global.expect.toBeDateOnDayOfWeek()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateOnDayOfWeek(0));
});

it('provides expect().toBeDateOnDayOfWeek()', () => {
  esmExpect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
});

it('provides expect().not.toBeDateOnDayOfWeek()', () => {
  esmExpect(() => esmExpect(new Date('2021-08-29')).not.toBeDateOnDayOfWeek(0)).toThrow();
});

it('provides expect.toBeDateOnDayOfWeek()', () => {
  esmExpect(new Date('2021-08-29')).toEqual(esmExpect.toBeDateOnDayOfWeek(0));
});
