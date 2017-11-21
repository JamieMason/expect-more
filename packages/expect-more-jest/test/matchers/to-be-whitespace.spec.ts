it('provides toBeWhitespace', () => {
  expect(' ').toBeWhitespace();
  expect(() => { expect('a').toBeWhitespace(); }).toThrow();
  expect(() => { expect(' ').not.toBeWhitespace(); }).toThrow();
});
