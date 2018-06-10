it('provides toBeWhitespace', () => {
  expect(' ').toBeWhitespace();
  expect(() => {
    expect('a').toBeWhitespace();
  }).toThrow();
  expect(() => {
    expect(' ').not.toBeWhitespace();
  }).toThrow();
});

it('provides expect.toBeWhitespace', () => {
  expect(' ').toEqual(expect.toBeWhitespace());
});
