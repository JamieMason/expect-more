it('provides toBeNonEmptyObject', () => {
  expect({ a: 1 }).toBeNonEmptyObject();
  expect(() => {
    expect({}).toBeNonEmptyObject();
  }).toThrow();
  expect(() => {
    expect({ a: 1 }).not.toBeNonEmptyObject();
  }).toThrow();
});
