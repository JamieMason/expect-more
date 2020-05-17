import 'expect-more-jest';

it('provides expect().toBeArrayOfNumbers()', () => {
  expect([12, 0, 14]).toBeArrayOfNumbers();
});

it('provides expect().not.toBeArrayOfNumbers()', () => {
  expect(() => expect([12, 0, 14]).not.toBeArrayOfNumbers()).toThrow();
});

it('provides expect.toBeArrayOfNumbers()', () => {
  expect([12, 0, 14]).toEqual(expect.toBeArrayOfNumbers());
});
