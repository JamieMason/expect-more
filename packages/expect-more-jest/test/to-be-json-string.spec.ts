import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeJsonString()', () => {
  expect('{"i":"am valid JSON"}').toBeJsonString();
});

it('provides global.expect().not.toBeJsonString()', () => {
  expect(() => expect('{"i":"am valid JSON"}').not.toBeJsonString()).toThrow();
});

it('provides global.expect.toBeJsonString()', () => {
  expect('{"i":"am valid JSON"}').toEqual(expect.toBeJsonString());
});

it('provides expect().toBeJsonString()', () => {
  esmExpect('{"i":"am valid JSON"}').toBeJsonString();
});

it('provides expect().not.toBeJsonString()', () => {
  esmExpect(() => esmExpect('{"i":"am valid JSON"}').not.toBeJsonString()).toThrow();
});

it('provides expect.toBeJsonString()', () => {
  esmExpect('{"i":"am valid JSON"}').toEqual(esmExpect.toBeJsonString());
});
