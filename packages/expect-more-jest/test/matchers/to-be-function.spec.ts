it('provides toBeFunction', () => {
  expect((_) => _).toBeFunction();
  expect(() => {
    expect(null).toBeFunction();
  }).toThrow();
  expect(() => {
    expect((_) => _).not.toBeFunction();
  }).toThrow();
});
