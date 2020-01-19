it('provides expect().toHaveUndefined()', () => {
  expect({ child: { grandchild: undefined } }).toHaveUndefined('child.grandchild');
});

it('provides expect().not.toHaveUndefined()', () => {
  expect(() =>
    expect({ child: { grandchild: undefined } }).not.toHaveUndefined('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveUndefined()', () => {
  expect({ child: { grandchild: undefined } }).toEqual(expect.toHaveUndefined('child.grandchild'));
});
