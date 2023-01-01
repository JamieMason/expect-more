import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeWhitespace()', () => {
  expect(' ').toBeWhitespace();
});

it('provides global.expect().not.toBeWhitespace()', () => {
  expect(() => expect(' ').not.toBeWhitespace()).toThrow();
});

it('provides global.expect.toBeWhitespace()', () => {
  expect(' ').toEqual(expect.toBeWhitespace());
});

it('provides expect().toBeWhitespace()', () => {
  esmExpect(' ').toBeWhitespace();
});

it('provides expect().not.toBeWhitespace()', () => {
  esmExpect(() => esmExpect(' ').not.toBeWhitespace()).toThrow();
});

it('provides expect.toBeWhitespace()', () => {
  esmExpect(' ').toEqual(esmExpect.toBeWhitespace());
});
