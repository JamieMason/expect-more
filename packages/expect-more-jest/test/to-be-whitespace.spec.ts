it('provides expect().toBeWhitespace()', () => {
  expect(' ').toBeWhitespace();
});

it('provides expect().not.toBeWhitespace()', () => {
  expect(() => expect(' ').not.toBeWhitespace()).toThrow();
});

it('provides expect.toBeWhitespace()', () => {
  expect(' ').toEqual(expect.toBeWhitespace());
});
