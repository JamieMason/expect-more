it('provides toBeNonEmptyArray', () => {
  expect([1, 2]).toBeNonEmptyArray();
  expect(() => { expect([]).toBeNonEmptyArray(); }).toThrow();
  expect(() => { expect([1, 2]).not.toBeNonEmptyArray(); }).toThrow();
});
