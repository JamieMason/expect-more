it('provides toBeRegExp', () => {
  expect(/match/).toBeRegExp();
  expect(() => { expect(null).toBeRegExp(); }).toThrow();
  expect(() => { expect(/match/).not.toBeRegExp(); }).toThrow();
});
