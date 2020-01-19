it('provides expect().toHaveNumberNear()', () => {
  expect({ child: { grandchild: 4.8 } }).toHaveNumberNear('child.grandchild', 5, 0.5);
});

it('provides expect().not.toHaveNumberNear()', () => {
  expect(() => expect({ child: { grandchild: 4.8 } }).not.toHaveNumberNear('child.grandchild', 5, 0.5)).toThrow();
});

it('provides expect.toHaveNumberNear()', () => {
  expect({ child: { grandchild: 4.8 } }).toEqual(expect.toHaveNumberNear('child.grandchild', 5, 0.5));
});
