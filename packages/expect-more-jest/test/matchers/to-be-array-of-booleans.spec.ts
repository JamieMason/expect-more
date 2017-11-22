it('provides toBeArrayOfBooleans', () => {
  expect([true]).toBeArrayOfBooleans();
  expect(() => {
    expect([null]).toBeArrayOfBooleans();
  }).toThrow();
  expect(() => {
    expect([true]).not.toBeArrayOfBooleans();
  }).toThrow();
});
