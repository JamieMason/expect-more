it('provides expect().toHaveNonEmptyString()', () => {
  expect({ child: { grandchild: 'i am not empty' } }).toHaveNonEmptyString('child.grandchild');
});

it('provides expect().not.toHaveNonEmptyString()', () => {
  expect(() =>
    expect({ child: { grandchild: 'i am not empty' } }).not.toHaveNonEmptyString(
      'child.grandchild',
    ),
  ).toThrow();
});

it('provides expect.toHaveNonEmptyString()', () => {
  expect({ child: { grandchild: 'i am not empty' } }).toEqual(
    expect.toHaveNonEmptyString('child.grandchild'),
  );
});
