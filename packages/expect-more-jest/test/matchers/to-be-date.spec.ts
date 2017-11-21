it('provides toBeDate', () => {
  expect(new Date()).toBeDate();
  expect(() => { expect(null).toBeDate(); }).toThrow();
  expect(() => { expect(new Date()).not.toBeDate(); }).toThrow();
});
