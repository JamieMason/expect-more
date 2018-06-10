it('provides toBeFalse', () => {
  expect(false).toBeFalse();
  expect(() => {
    expect(null).toBeFalse();
  }).toThrow();
  expect(() => {
    expect(false).not.toBeFalse();
  }).toThrow();
});
