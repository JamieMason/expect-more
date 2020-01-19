it('provides expect().toHaveNumber()', () => {
  expect({ child: { grandchild: 8 } }).toHaveNumber('child.grandchild');
});

it('provides expect().not.toHaveNumber()', () => {
  expect(() => expect({ child: { grandchild: 8 } }).not.toHaveNumber('child.grandchild')).toThrow();
});

it('provides expect.toHaveNumber()', () => {
  expect({ child: { grandchild: 8 } }).toEqual(expect.toHaveNumber('child.grandchild'));
});
