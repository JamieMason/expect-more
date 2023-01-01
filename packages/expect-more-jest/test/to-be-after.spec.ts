import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeAfter()', () => {
  expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
});

it('provides global.expect().not.toBeAfter()', () => {
  expect(() => expect(new Date('2020-01-01')).not.toBeAfter(new Date('2019-12-31'))).toThrow();
});

it('provides global.expect.toBeAfter()', () => {
  expect(new Date('2020-01-01')).toEqual(expect.toBeAfter(new Date('2019-12-31')));
});

it('provides expect().toBeAfter()', () => {
  esmExpect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
});

it('provides expect().not.toBeAfter()', () => {
  esmExpect(() =>
    esmExpect(new Date('2020-01-01')).not.toBeAfter(new Date('2019-12-31')),
  ).toThrow();
});

it('provides expect.toBeAfter()', () => {
  esmExpect(new Date('2020-01-01')).toEqual(esmExpect.toBeAfter(new Date('2019-12-31')));
});
