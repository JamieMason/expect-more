it('provides expect().toHaveWholeNumber()', () => {
  expect({ child: { grandchild: 8 } }).toHaveWholeNumber('child.grandchild');
});

it('provides expect().not.toHaveWholeNumber()', () => {
  expect(() =>
    expect({ child: { grandchild: 8 } }).not.toHaveWholeNumber('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveWholeNumber()', () => {
  expect({ child: { grandchild: 8 } }).toEqual(expect.toHaveWholeNumber('child.grandchild'));
});
