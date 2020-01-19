it('provides expect().toHaveNonEmptyObject()', () => {
  expect({ child: { grandchild: { i: 'am not empty' } } }).toHaveNonEmptyObject('child.grandchild');
});

it('provides expect().not.toHaveNonEmptyObject()', () => {
  expect(() =>
    expect({ child: { grandchild: { i: 'am not empty' } } }).not.toHaveNonEmptyObject(
      'child.grandchild',
    ),
  ).toThrow();
});

it('provides expect.toHaveNonEmptyObject()', () => {
  expect({ child: { grandchild: { i: 'am not empty' } } }).toEqual(
    expect.toHaveNonEmptyObject('child.grandchild'),
  );
});
