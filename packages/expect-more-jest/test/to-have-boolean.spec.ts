it('provides expect().toHaveBoolean()', () => {
  expect({ child: { grandchild: false } }).toHaveBoolean('child.grandchild');
});

it('provides expect().not.toHaveBoolean()', () => {
  expect(() =>
    expect({ child: { grandchild: false } }).not.toHaveBoolean('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveBoolean()', () => {
  expect({ child: { grandchild: false } }).toEqual(expect.toHaveBoolean('child.grandchild'));
});
