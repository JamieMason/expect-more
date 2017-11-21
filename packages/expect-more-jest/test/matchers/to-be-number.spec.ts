it('provides toBeNumber', () => {
  expect(1).toBeNumber();
  expect(() => { expect(null).toBeNumber(); }).toThrow();
  expect(() => { expect(1).not.toBeNumber(); }).toThrow();
});
