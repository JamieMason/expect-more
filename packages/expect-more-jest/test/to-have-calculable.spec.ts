it('provides expect().toHaveCalculable()', () => {
  expect({ child: { grandchild: '100' } }).toHaveCalculable('child.grandchild');
});

it('provides expect().not.toHaveCalculable()', () => {
  expect(() =>
    expect({ child: { grandchild: '100' } }).not.toHaveCalculable('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveCalculable()', () => {
  expect({ child: { grandchild: '100' } }).toEqual(expect.toHaveCalculable('child.grandchild'));
});
