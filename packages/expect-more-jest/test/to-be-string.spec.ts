import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeString()', () => {
  expect('i am a string').toBeString();
});

it('provides global.expect().not.toBeString()', () => {
  expect(() => expect('i am a string').not.toBeString()).toThrow();
});

it('provides global.expect.toBeString()', () => {
  expect('i am a string').toEqual(expect.toBeString());
});

it('provides expect().toBeString()', () => {
  esmExpect('i am a string').toBeString();
});

it('provides expect().not.toBeString()', () => {
  esmExpect(() => esmExpect('i am a string').not.toBeString()).toThrow();
});

it('provides expect.toBeString()', () => {
  esmExpect('i am a string').toEqual(esmExpect.toBeString());
});
