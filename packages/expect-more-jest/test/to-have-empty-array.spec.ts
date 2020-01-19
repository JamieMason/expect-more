it('provides expect().toHaveEmptyArray()', () => {
  expect({ child: { grandchild: [] } }).toHaveEmptyArray('child.grandchild');
});

it('provides expect().not.toHaveEmptyArray()', () => {
  expect(() => expect({ child: { grandchild: [] } }).not.toHaveEmptyArray('child.grandchild')).toThrow();
});

it('provides expect.toHaveEmptyArray()', () => {
  expect({ child: { grandchild: [] } }).toEqual(expect.toHaveEmptyArray('child.grandchild'));
});
