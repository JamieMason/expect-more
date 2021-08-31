import 'expect-more-jest';

it('provides expect().toBeArrayIncludingAnyOf()', () => {
  expect([12, 0, 14, 'Ginola']).toBeArrayIncludingAnyOf(['Ginola', 3]);
});

it('provides expect().not.toBeArrayIncludingAnyOf()', () => {
  expect(() => expect([12, 0, 14, 'Ginola']).not.toBeArrayIncludingAnyOf(['Ginola', 3])).toThrow();
});

it('provides expect.toBeArrayIncludingAnyOf()', () => {
  expect([12, 0, 14, 'Ginola']).toEqual(expect.toBeArrayIncludingAnyOf(['Ginola', 3]));
});
