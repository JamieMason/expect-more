import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeWithinRange()', () => {
  expect(7).toBeWithinRange(0, 10);
});

it('provides global.expect().not.toBeWithinRange()', () => {
  expect(() => expect(7).not.toBeWithinRange(0, 10)).toThrow();
});

it('provides global.expect.toBeWithinRange()', () => {
  expect(7).toEqual(expect.toBeWithinRange(0, 10));
});

it('provides expect().toBeWithinRange()', () => {
  esmExpect(7).toBeWithinRange(0, 10);
});

it('provides expect().not.toBeWithinRange()', () => {
  esmExpect(() => esmExpect(7).not.toBeWithinRange(0, 10)).toThrow();
});

it('provides expect.toBeWithinRange()', () => {
  esmExpect(7).toEqual(esmExpect.toBeWithinRange(0, 10));
});
