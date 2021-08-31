import 'expect-more-jest';

it('provides expect().toBeArrayIncludingAllOf()', () => {
  expect([12, 0, 14, 'Ivo']).toBeArrayIncludingAllOf(['Ivo', 14]);
});

it('provides expect().not.toBeArrayIncludingAllOf()', () => {
  expect(() => expect([12, 0, 14, 'Ivo']).not.toBeArrayIncludingAllOf(['Ivo', 14])).toThrow();
});

it('provides expect.toBeArrayIncludingAllOf()', () => {
  expect([12, 0, 14, 'Ivo']).toEqual(expect.toBeArrayIncludingAllOf(['Ivo', 14]));
});
