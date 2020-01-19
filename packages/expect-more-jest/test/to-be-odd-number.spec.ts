it('provides expect().toBeOddNumber()', () => {
  expect(5).toBeOddNumber();
});

it('provides expect().not.toBeOddNumber()', () => {
  expect(() => expect(5).not.toBeOddNumber()).toThrow();
});

it('provides expect.toBeOddNumber()', () => {
  expect(5).toEqual(expect.toBeOddNumber());
});
