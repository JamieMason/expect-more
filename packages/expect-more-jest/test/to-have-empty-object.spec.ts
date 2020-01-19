it('provides expect().toHaveEmptyObject()', () => {
  expect({ child: { grandchild: {} } }).toHaveEmptyObject('child.grandchild');
});

it('provides expect().not.toHaveEmptyObject()', () => {
  expect(() =>
    expect({ child: { grandchild: {} } }).not.toHaveEmptyObject('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveEmptyObject()', () => {
  expect({ child: { grandchild: {} } }).toEqual(expect.toHaveEmptyObject('child.grandchild'));
});
