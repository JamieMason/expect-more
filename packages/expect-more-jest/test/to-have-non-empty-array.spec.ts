it('provides expect().toHaveNonEmptyArray()', () => {
  expect({ child: { grandchild: ['i', 'am not empty'] } }).toHaveNonEmptyArray('child.grandchild');
});

it('provides expect().not.toHaveNonEmptyArray()', () => {
  expect(() =>
    expect({ child: { grandchild: ['i', 'am not empty'] } }).not.toHaveNonEmptyArray(
      'child.grandchild',
    ),
  ).toThrow();
});

it('provides expect.toHaveNonEmptyArray()', () => {
  expect({ child: { grandchild: ['i', 'am not empty'] } }).toEqual(
    expect.toHaveNonEmptyArray('child.grandchild'),
  );
});
