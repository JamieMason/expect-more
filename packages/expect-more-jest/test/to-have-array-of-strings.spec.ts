it('provides expect().toHaveArrayOfStrings()', () => {
  expect({ child: { grandchild: ['we', 'are', 'all', 'strings'] } }).toHaveArrayOfStrings('child.grandchild');
});

it('provides expect().not.toHaveArrayOfStrings()', () => {
  expect(() =>
    expect({ child: { grandchild: ['we', 'are', 'all', 'strings'] } }).not.toHaveArrayOfStrings('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveArrayOfStrings()', () => {
  expect({ child: { grandchild: ['we', 'are', 'all', 'strings'] } }).toEqual(
    expect.toHaveArrayOfStrings('child.grandchild'),
  );
});
