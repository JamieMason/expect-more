import 'expect-more-jest';

it('provides expect().toBePositiveNumber()', () => {
  expect(5).toBePositiveNumber();
});

it('provides expect().not.toBePositiveNumber()', () => {
  expect(() => expect(5).not.toBePositiveNumber()).toThrow();
});

it('provides expect.toBePositiveNumber()', () => {
  expect(5).toEqual(expect.toBePositiveNumber());
});
