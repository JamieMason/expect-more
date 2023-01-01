import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayIncludingAllOf()', () => {
  expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
});

it('provides global.expect().not.toBeArrayIncludingAllOf()', () => {
  expect(() => expect([12, 0, 14, 'Ivo']).not.toBeArrayIncludingAllOf(['Ivo', 14])).toThrow();
});

it('provides global.expect.toBeArrayIncludingAllOf()', () => {
  expect([12, 0, 14, 'Ivo']).toEqual(expect.toBeArrayIncludingAllOf(['Ivo', 14]));
});

it('provides expect().toBeArrayIncludingAllOf()', () => {
  esmExpect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
});

it('provides expect().not.toBeArrayIncludingAllOf()', () => {
  esmExpect(() => esmExpect([12, 0, 14, 'Ivo']).not.toBeArrayIncludingAllOf(['Ivo', 14])).toThrow();
});

it('provides expect.toBeArrayIncludingAllOf()', () => {
  esmExpect([12, 0, 14, 'Ivo']).toEqual(esmExpect.toBeArrayIncludingAllOf(['Ivo', 14]));
});
