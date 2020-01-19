it('provides expect().toHaveObject()', () => {
  expect({ child: { grandchild: {} } }).toHaveObject('child.grandchild');
});

it('provides expect().not.toHaveObject()', () => {
  expect(() => expect({ child: { grandchild: {} } }).not.toHaveObject('child.grandchild')).toThrow();
});

it('provides expect.toHaveObject()', () => {
  expect({ child: { grandchild: {} } }).toEqual(expect.toHaveObject('child.grandchild'));
});
