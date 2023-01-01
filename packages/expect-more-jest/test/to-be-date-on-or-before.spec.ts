import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDateOnOrBefore()', () => {
  expect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
});

it('provides global.expect().not.toBeDateOnOrBefore()', () => {
  expect(() =>
    expect(new Date('2019-12-15')).not.toBeDateOnOrBefore(new Date('2019-12-31')),
  ).toThrow();
});

it('provides global.expect.toBeDateOnOrBefore()', () => {
  expect(new Date('2019-12-15')).toEqual(expect.toBeDateOnOrBefore(new Date('2019-12-31')));
});

it('provides expect().toBeDateOnOrBefore()', () => {
  esmExpect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
});

it('provides expect().not.toBeDateOnOrBefore()', () => {
  esmExpect(() =>
    esmExpect(new Date('2019-12-15')).not.toBeDateOnOrBefore(new Date('2019-12-31')),
  ).toThrow();
});

it('provides expect.toBeDateOnOrBefore()', () => {
  esmExpect(new Date('2019-12-15')).toEqual(esmExpect.toBeDateOnOrBefore(new Date('2019-12-31')));
});
