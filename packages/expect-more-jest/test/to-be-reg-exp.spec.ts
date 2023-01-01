import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeRegExp()', () => {
  expect(new RegExp('i am a regular expression')).toBeRegExp();
});

it('provides global.expect().not.toBeRegExp()', () => {
  expect(() => expect(new RegExp('i am a regular expression')).not.toBeRegExp()).toThrow();
});

it('provides global.expect.toBeRegExp()', () => {
  expect(new RegExp('i am a regular expression')).toEqual(expect.toBeRegExp());
});

it('provides expect().toBeRegExp()', () => {
  esmExpect(new RegExp('i am a regular expression')).toBeRegExp();
});

it('provides expect().not.toBeRegExp()', () => {
  esmExpect(() => esmExpect(new RegExp('i am a regular expression')).not.toBeRegExp()).toThrow();
});

it('provides expect.toBeRegExp()', () => {
  esmExpect(new RegExp('i am a regular expression')).toEqual(esmExpect.toBeRegExp());
});
