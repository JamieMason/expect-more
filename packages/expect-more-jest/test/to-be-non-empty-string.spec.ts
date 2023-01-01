import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeNonEmptyString()', () => {
  expect('i am not empty').toBeNonEmptyString();
});

it('provides global.expect().not.toBeNonEmptyString()', () => {
  expect(() => expect('i am not empty').not.toBeNonEmptyString()).toThrow();
});

it('provides global.expect.toBeNonEmptyString()', () => {
  expect('i am not empty').toEqual(expect.toBeNonEmptyString());
});

it('provides expect().toBeNonEmptyString()', () => {
  esmExpect('i am not empty').toBeNonEmptyString();
});

it('provides expect().not.toBeNonEmptyString()', () => {
  esmExpect(() => esmExpect('i am not empty').not.toBeNonEmptyString()).toThrow();
});

it('provides expect.toBeNonEmptyString()', () => {
  esmExpect('i am not empty').toEqual(esmExpect.toBeNonEmptyString());
});
