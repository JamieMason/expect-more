it('provides toBeShorterThan', () => {
  expect('ab').toBeShorterThan('abc');
  expect([2, 3]).toBeShorterThan([3, 6, 1]);
  expect(() => {
    expect('abc').toBeShorterThan('ab');
  }).toThrow();
  expect(() => {
    expect([1, 2]).toBeShorterThan([1]);
  }).toThrow();
  expect(() => {
    expect('ab').not.toBeShorterThan('abc');
  }).toThrow();
  expect(() => {
    expect([1]).not.toBeShorterThan([0, 1]);
  }).toThrow();
});
