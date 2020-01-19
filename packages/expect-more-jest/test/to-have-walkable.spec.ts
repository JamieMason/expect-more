it('provides expect().toHaveWalkable()', () => {
  expect({ child: { grandchild: {} } }).toHaveWalkable('child.grandchild');
});

it('provides expect().not.toHaveWalkable()', () => {
  expect(() =>
    expect({ child: { grandchild: {} } }).not.toHaveWalkable('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveWalkable()', () => {
  expect({ child: { grandchild: {} } }).toEqual(expect.toHaveWalkable('child.grandchild'));
});
