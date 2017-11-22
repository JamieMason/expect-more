it('provides toBeUndefined', () => {
  expect(undefined).toBeUndefined();
  expect(() => {
    expect(null).toBeUndefined();
  }).toThrow();
  expect(() => {
    expect(undefined).not.toBeUndefined();
  }).toThrow();
});
