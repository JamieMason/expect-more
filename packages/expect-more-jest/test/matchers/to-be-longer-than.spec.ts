it('provides toBeLongerThan', () => {
  expect('abc').toBeLongerThan('de');
  expect(() => { expect('abc').toBeLongerThan('defghi'); }).toThrow();
  expect(() => { expect('abc').not.toBeLongerThan('de'); }).toThrow();
});
