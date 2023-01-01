import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeDate()', () => {
  expect(new Date('2019-12-31')).toBeDate();
});

it('provides global.expect().not.toBeDate()', () => {
  expect(() => expect(new Date('2019-12-31')).not.toBeDate()).toThrow();
});

it('provides global.expect.toBeDate()', () => {
  expect(new Date('2019-12-31')).toEqual(expect.toBeDate());
});

it('provides expect().toBeDate()', () => {
  esmExpect(new Date('2019-12-31')).toBeDate();
});

it('provides expect().not.toBeDate()', () => {
  esmExpect(() => esmExpect(new Date('2019-12-31')).not.toBeDate()).toThrow();
});

it('provides expect.toBeDate()', () => {
  esmExpect(new Date('2019-12-31')).toEqual(esmExpect.toBeDate());
});
