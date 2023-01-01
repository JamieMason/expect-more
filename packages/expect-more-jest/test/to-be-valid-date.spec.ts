import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeValidDate()', () => {
  expect(new Date('2020-01-01')).toBeValidDate();
});

it('provides global.expect().not.toBeValidDate()', () => {
  expect(() => expect(new Date('2020-01-01')).not.toBeValidDate()).toThrow();
});

it('provides global.expect.toBeValidDate()', () => {
  expect(new Date('2020-01-01')).toEqual(expect.toBeValidDate());
});

it('provides expect().toBeValidDate()', () => {
  esmExpect(new Date('2020-01-01')).toBeValidDate();
});

it('provides expect().not.toBeValidDate()', () => {
  esmExpect(() => esmExpect(new Date('2020-01-01')).not.toBeValidDate()).toThrow();
});

it('provides expect.toBeValidDate()', () => {
  esmExpect(new Date('2020-01-01')).toEqual(esmExpect.toBeValidDate());
});
