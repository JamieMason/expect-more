it('provides toBeLongerThan', () => {
  expect('abc').toBeLongerThan('de');
  expect([3, 5, 7]).toBeLongerThan([1, 2]);
  expect(() => {
    expect('abc').toBeLongerThan('defghi');
  }).toThrow();
  expect(() => {
    expect([2, 4, 5]).toBeLongerThan([5, 8, 0, 4, 2, 4]);
  }).toThrow();
  expect(() => {
    expect('abc').not.toBeLongerThan('de');
  }).toThrow();
  expect(() => {
    expect([3, 4, 5]).not.toBeLongerThan([2, 5]);
  }).toThrow();
});
