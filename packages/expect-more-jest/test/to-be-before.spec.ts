import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeBefore()', () => {
  expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
});

it('provides global.expect().not.toBeBefore()', () => {
  expect(() => expect(new Date('2019-12-31')).not.toBeBefore(new Date('2020-01-01'))).toThrow();
});

it('provides global.expect.toBeBefore()', () => {
  expect(new Date('2019-12-31')).toEqual(expect.toBeBefore(new Date('2020-01-01')));
});

it('provides expect().toBeBefore()', () => {
  esmExpect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
});

it('provides expect().not.toBeBefore()', () => {
  esmExpect(() =>
    esmExpect(new Date('2019-12-31')).not.toBeBefore(new Date('2020-01-01')),
  ).toThrow();
});

it('provides expect.toBeBefore()', () => {
  esmExpect(new Date('2019-12-31')).toEqual(esmExpect.toBeBefore(new Date('2020-01-01')));
});
