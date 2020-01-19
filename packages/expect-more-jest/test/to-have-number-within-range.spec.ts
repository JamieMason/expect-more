it('provides expect().toHaveNumberWithinRange()', () => {
  expect({ child: { grandchild: 7 } }).toHaveNumberWithinRange('child.grandchild', 0, 10);
});

it('provides expect().not.toHaveNumberWithinRange()', () => {
  expect(() => expect({ child: { grandchild: 7 } }).not.toHaveNumberWithinRange('child.grandchild', 0, 10)).toThrow();
});

it('provides expect.toHaveNumberWithinRange()', () => {
  expect({ child: { grandchild: 7 } }).toEqual(expect.toHaveNumberWithinRange('child.grandchild', 0, 10));
});
