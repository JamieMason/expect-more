it('provides expect().toHaveWhitespace()', () => {
  expect({ child: { grandchild: ' ' } }).toHaveWhitespace('child.grandchild');
});

it('provides expect().not.toHaveWhitespace()', () => {
  expect(() =>
    expect({ child: { grandchild: ' ' } }).not.toHaveWhitespace('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveWhitespace()', () => {
  expect({ child: { grandchild: ' ' } }).toEqual(expect.toHaveWhitespace('child.grandchild'));
});
