it('provides expect().toHaveTrue()', () => {
  expect({ child: { grandchild: true } }).toHaveTrue('child.grandchild');
});

it('provides expect().not.toHaveTrue()', () => {
  expect(() => expect({ child: { grandchild: true } }).not.toHaveTrue('child.grandchild')).toThrow();
});

it('provides expect.toHaveTrue()', () => {
  expect({ child: { grandchild: true } }).toEqual(expect.toHaveTrue('child.grandchild'));
});
