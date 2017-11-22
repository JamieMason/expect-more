it('provides toBeArrayOfSize', () => {
  expect([1]).toBeArrayOfSize(1);
  expect(() => {
    expect([1]).toBeArrayOfSize(2);
  }).toThrow();
  expect(() => {
    expect([1]).not.toBeArrayOfSize(1);
  }).toThrow();
});
