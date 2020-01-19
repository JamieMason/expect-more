it('provides expect().toHaveArrayOfNumbers()', () => {
  expect({ child: { grandchild: [12, 0, 14] } }).toHaveArrayOfNumbers('child.grandchild');
});

it('provides expect().not.toHaveArrayOfNumbers()', () => {
  expect(() => expect({ child: { grandchild: [12, 0, 14] } }).not.toHaveArrayOfNumbers('child.grandchild')).toThrow();
});

it('provides expect.toHaveArrayOfNumbers()', () => {
  expect({ child: { grandchild: [12, 0, 14] } }).toEqual(expect.toHaveArrayOfNumbers('child.grandchild'));
});
