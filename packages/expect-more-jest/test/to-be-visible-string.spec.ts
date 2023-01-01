import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeVisibleString()', () => {
  expect('i am visible').toBeVisibleString();
});

it('provides global.expect().not.toBeVisibleString()', () => {
  expect(() => expect('i am visible').not.toBeVisibleString()).toThrow();
});

it('provides global.expect.toBeVisibleString()', () => {
  expect('i am visible').toEqual(expect.toBeVisibleString());
});

it('provides expect().toBeVisibleString()', () => {
  esmExpect('i am visible').toBeVisibleString();
});

it('provides expect().not.toBeVisibleString()', () => {
  esmExpect(() => esmExpect('i am visible').not.toBeVisibleString()).toThrow();
});

it('provides expect.toBeVisibleString()', () => {
  esmExpect('i am visible').toEqual(esmExpect.toBeVisibleString());
});
