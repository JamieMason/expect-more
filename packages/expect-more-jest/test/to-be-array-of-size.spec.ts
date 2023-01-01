import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayOfSize()', () => {
  expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
});

it('provides global.expect().not.toBeArrayOfSize()', () => {
  expect(() => expect(['i', 'contain', 4, 'items']).not.toBeArrayOfSize(4)).toThrow();
});

it('provides global.expect.toBeArrayOfSize()', () => {
  expect(['i', 'contain', 4, 'items']).toEqual(expect.toBeArrayOfSize(4));
});

it('provides expect().toBeArrayOfSize()', () => {
  esmExpect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
});

it('provides expect().not.toBeArrayOfSize()', () => {
  esmExpect(() => esmExpect(['i', 'contain', 4, 'items']).not.toBeArrayOfSize(4)).toThrow();
});

it('provides expect.toBeArrayOfSize()', () => {
  esmExpect(['i', 'contain', 4, 'items']).toEqual(esmExpect.toBeArrayOfSize(4));
});
