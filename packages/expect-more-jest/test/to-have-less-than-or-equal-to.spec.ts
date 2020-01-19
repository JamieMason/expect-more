it('provides expect().toHaveLessThanOrEqualTo()', () => {
  expect({ child: { grandchild: 8 } }).toHaveLessThanOrEqualTo('child.grandchild', 12);
});

it('provides expect().not.toHaveLessThanOrEqualTo()', () => {
  expect(() => expect({ child: { grandchild: 8 } }).not.toHaveLessThanOrEqualTo('child.grandchild', 12)).toThrow();
});

it('provides expect.toHaveLessThanOrEqualTo()', () => {
  expect({ child: { grandchild: 8 } }).toEqual(expect.toHaveLessThanOrEqualTo('child.grandchild', 12));
});
