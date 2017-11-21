it('provides toBeEmptyArray', () => {
  expect([]).toBeEmptyArray();
  expect(() => { expect(null).toBeEmptyArray(); }).toThrow();
  expect(() => { expect([]).not.toBeEmptyArray(); }).toThrow();
});
