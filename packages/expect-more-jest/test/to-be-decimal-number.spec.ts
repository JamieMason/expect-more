it('provides expect().toBeDecimalNumber()', () => {
  expect(12.55).toBeDecimalNumber();
});

it('provides expect().not.toBeDecimalNumber()', () => {
  expect(() => expect(12.55).not.toBeDecimalNumber()).toThrow();
});

it('provides expect.toBeDecimalNumber()', () => {
  expect(12.55).toEqual(expect.toBeDecimalNumber());
});
