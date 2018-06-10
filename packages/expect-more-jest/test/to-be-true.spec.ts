it('provides toBeTrue', () => {
  expect(true).toBeTrue();
  expect(() => {
    expect(null).toBeTrue();
  }).toThrow();
  expect(() => {
    expect(true).not.toBeTrue();
  }).toThrow();
});
