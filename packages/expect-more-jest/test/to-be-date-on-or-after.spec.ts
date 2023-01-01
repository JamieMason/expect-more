import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDateOnOrAfter()', () => {
  expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
});

it('provides global.expect().not.toBeDateOnOrAfter()', () => {
  expect(() =>
    expect(new Date('2019-12-31')).not.toBeDateOnOrAfter(new Date('2019-12-15')),
  ).toThrow();
});

it('provides global.expect.toBeDateOnOrAfter()', () => {
  expect(new Date('2019-12-31')).toEqual(expect.toBeDateOnOrAfter(new Date('2019-12-15')));
});

it('provides expect().toBeDateOnOrAfter()', () => {
  esmExpect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
});

it('provides expect().not.toBeDateOnOrAfter()', () => {
  esmExpect(() =>
    esmExpect(new Date('2019-12-31')).not.toBeDateOnOrAfter(new Date('2019-12-15')),
  ).toThrow();
});

it('provides expect.toBeDateOnOrAfter()', () => {
  esmExpect(new Date('2019-12-31')).toEqual(esmExpect.toBeDateOnOrAfter(new Date('2019-12-15')));
});
