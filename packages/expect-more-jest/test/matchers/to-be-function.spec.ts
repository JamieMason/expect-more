it('provides toBeFunction', () => {
  expect(() => {}).toBeFunction();
  expect(() => { expect(null).toBeFunction(); }).toThrow();
  expect(() => { expect(() => {}).not.toBeFunction(); }).toThrow();
});
