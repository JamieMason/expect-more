it('provides toBeOddNumber', () => {
  expect(3).toBeOddNumber();
  expect(() => {
    expect(null).toBeOddNumber();
  }).toThrow();
  expect(() => {
    expect(3).not.toBeOddNumber();
  }).toThrow();
});

it('provides expect.toBeOddNumber', () => {
  expect(3).toEqual(expect.toBeOddNumber());
});
