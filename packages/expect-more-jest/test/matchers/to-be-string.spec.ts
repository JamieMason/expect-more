it('provides toBeString', () => {
  expect('a').toBeString();
  expect(() => {
    expect(null).toBeString();
  }).toThrow();
  expect(() => {
    expect('a').not.toBeString();
  }).toThrow();
});
