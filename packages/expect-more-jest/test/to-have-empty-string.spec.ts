it('provides expect().toHaveEmptyString()', () => {
  expect({ child: { grandchild: '' } }).toHaveEmptyString('child.grandchild');
});

it('provides expect().not.toHaveEmptyString()', () => {
  expect(() =>
    expect({ child: { grandchild: '' } }).not.toHaveEmptyString('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveEmptyString()', () => {
  expect({ child: { grandchild: '' } }).toEqual(expect.toHaveEmptyString('child.grandchild'));
});
