it('provides toBeArrayOfStrings', () => {
  expect(['']).toBeArrayOfStrings();
  expect(() => {
    expect([null]).toBeArrayOfStrings();
  }).toThrow();
  expect(() => {
    expect(['']).not.toBeArrayOfStrings();
  }).toThrow();
});
