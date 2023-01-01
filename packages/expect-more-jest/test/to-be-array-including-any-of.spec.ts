import { expect as esmExpect, it } from '@jest/globals';
import 'expect-more-jest';

it('provides global.expect().toBeArrayIncludingAnyOf()', () => {
  expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
});

it('provides global.expect().not.toBeArrayIncludingAnyOf()', () => {
  expect(() => expect([12, 0, 14, 'Ginola']).not.toBeArrayIncludingAnyOf(['Ginola', 3])).toThrow();
});

it('provides global.expect.toBeArrayIncludingAnyOf()', () => {
  expect([12, 0, 14, 'Ginola']).toEqual(expect.toBeArrayIncludingAnyOf(['Ginola', 3]));
});

it('provides expect().toBeArrayIncludingAnyOf()', () => {
  esmExpect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
});

it('provides expect().not.toBeArrayIncludingAnyOf()', () => {
  esmExpect(() =>
    esmExpect([12, 0, 14, 'Ginola']).not.toBeArrayIncludingAnyOf(['Ginola', 3]),
  ).toThrow();
});

it('provides expect.toBeArrayIncludingAnyOf()', () => {
  esmExpect([12, 0, 14, 'Ginola']).toEqual(esmExpect.toBeArrayIncludingAnyOf(['Ginola', 3]));
});
