it('provides expect().toHaveNull()', () => {
  expect({ child: { grandchild: null } }).toHaveNull('child.grandchild');
});

it('provides expect().not.toHaveNull()', () => {
  expect(() => expect({ child: { grandchild: null } }).not.toHaveNull('child.grandchild')).toThrow();
});

it('provides expect.toHaveNull()', () => {
  expect({ child: { grandchild: null } }).toEqual(expect.toHaveNull('child.grandchild'));
});
