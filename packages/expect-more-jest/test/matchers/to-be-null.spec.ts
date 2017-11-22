it('provides toBeNull', () => {
  expect(null).toBeNull();
  expect(() => {
    expect(1).toBeNull();
  }).toThrow();
  expect(() => {
    expect(null).not.toBeNull();
  }).toThrow();
});
