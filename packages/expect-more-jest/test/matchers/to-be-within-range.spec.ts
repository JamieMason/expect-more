it('provides toBeWithinRange', () => {
  expect(2).toBeWithinRange(1, 3);
  expect(() => { expect(5).toBeWithinRange(1, 3); }).toThrow();
  expect(() => { expect(2).not.toBeWithinRange(1, 3); }).toThrow();
});
