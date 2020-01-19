it('provides expect().toBeWholeNumber()', () => {
  expect(8).toBeWholeNumber();
});

it('provides expect().not.toBeWholeNumber()', () => {
  expect(() => expect(8).not.toBeWholeNumber()).toThrow();
});

it('provides expect.toBeWholeNumber()', () => {
  expect(8).toEqual(expect.toBeWholeNumber());
});
