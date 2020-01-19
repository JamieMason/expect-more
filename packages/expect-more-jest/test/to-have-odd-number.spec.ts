it('provides expect().toHaveOddNumber()', () => {
  expect({ child: { grandchild: 5 } }).toHaveOddNumber('child.grandchild');
});

it('provides expect().not.toHaveOddNumber()', () => {
  expect(() =>
    expect({ child: { grandchild: 5 } }).not.toHaveOddNumber('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveOddNumber()', () => {
  expect({ child: { grandchild: 5 } }).toEqual(expect.toHaveOddNumber('child.grandchild'));
});
