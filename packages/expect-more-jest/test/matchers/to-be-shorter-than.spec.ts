it('provides toBeShorterThan', () => {
  expect('ab').toBeShorterThan('abc');
  expect(() => {
    expect('abc').toBeShorterThan('ab');
  }).toThrow();
  expect(() => {
    expect('ab').not.toBeShorterThan('abc');
  }).toThrow();
});
