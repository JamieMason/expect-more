it('provides toBeWalkable', () => {
  expect(true).toBeWalkable();
  expect(() => { expect(null).toBeWalkable(); }).toThrow();
  expect(() => { expect(true).not.toBeWalkable(); }).toThrow();
});
