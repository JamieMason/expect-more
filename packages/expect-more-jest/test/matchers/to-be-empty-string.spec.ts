it('provides toBeEmptyString', () => {
  expect('').toBeEmptyString();
  expect(() => {
    expect(null).toBeEmptyString();
  }).toThrow();
  expect(() => {
    expect('').not.toBeEmptyString();
  }).toThrow();
});
