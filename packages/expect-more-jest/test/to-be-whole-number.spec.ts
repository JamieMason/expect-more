it('provides toBeWholeNumber', () => {
  expect(1).toBeWholeNumber();
  expect(() => {
    expect(1.25).toBeWholeNumber();
  }).toThrow();
  expect(() => {
    expect(1).not.toBeWholeNumber();
  }).toThrow();
});

it('provides expect.toBeWholeNumber', () => {
  expect(1).toEqual(expect.toBeWholeNumber());
});
