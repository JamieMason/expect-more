import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeEmptyString()', () => {
  expect('').toBeEmptyString();
});

it('provides global.expect().not.toBeEmptyString()', () => {
  expect(() => expect('').not.toBeEmptyString()).toThrow();
});

it('provides global.expect.toBeEmptyString()', () => {
  expect('').toEqual(expect.toBeEmptyString());
});

it('provides expect().toBeEmptyString()', () => {
  esmExpect('').toBeEmptyString();
});

it('provides expect().not.toBeEmptyString()', () => {
  esmExpect(() => esmExpect('').not.toBeEmptyString()).toThrow();
});

it('provides expect.toBeEmptyString()', () => {
  esmExpect('').toEqual(esmExpect.toBeEmptyString());
});
