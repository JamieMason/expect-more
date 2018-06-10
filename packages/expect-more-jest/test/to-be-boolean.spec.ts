it('provides toBeBoolean', () => {
  expect(true).toBeBoolean();
  expect(() => {
    expect(null).toBeBoolean();
  }).toThrow();
  expect(() => {
    expect(true).not.toBeBoolean();
  }).toThrow();
});
