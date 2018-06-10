it('provides toBeArray', () => {
  expect([]).toBeArray();
  expect(() => {
    expect(null).toBeArray();
  }).toThrow();
  expect(() => {
    expect([]).not.toBeArray();
  }).toThrow();
});
