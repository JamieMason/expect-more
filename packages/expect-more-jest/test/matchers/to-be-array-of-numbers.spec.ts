it('provides toBeArrayOfNumbers', () => {
  expect([1]).toBeArrayOfNumbers();
  expect(() => {
    expect([null]).toBeArrayOfNumbers();
  }).toThrow();
  expect(() => {
    expect([1]).not.toBeArrayOfNumbers();
  }).toThrow();
});
