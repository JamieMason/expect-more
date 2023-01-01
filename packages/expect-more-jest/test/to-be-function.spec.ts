import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeFunction()', () => {
  expect(() => 'i am a function').toBeFunction();
});

it('provides global.expect().not.toBeFunction()', () => {
  expect(() => expect(() => 'i am a function').not.toBeFunction()).toThrow();
});

it('provides global.expect.toBeFunction()', () => {
  expect(() => 'i am a function').toEqual(expect.toBeFunction());
});

it('provides expect().toBeFunction()', () => {
  esmExpect(() => 'i am a function').toBeFunction();
});

it('provides expect().not.toBeFunction()', () => {
  esmExpect(() => esmExpect(() => 'i am a function').not.toBeFunction()).toThrow();
});

it('provides expect.toBeFunction()', () => {
  esmExpect(() => 'i am a function').toEqual(esmExpect.toBeFunction());
});
