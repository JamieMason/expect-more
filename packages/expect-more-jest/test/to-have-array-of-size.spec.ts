it('provides expect().toHaveArrayOfSize()', () => {
  expect({ child: { grandchild: ['i', 'contain', 4, 'items'] } }).toHaveArrayOfSize(
    'child.grandchild',
    4,
  );
});

it('provides expect().not.toHaveArrayOfSize()', () => {
  expect(() =>
    expect({ child: { grandchild: ['i', 'contain', 4, 'items'] } }).not.toHaveArrayOfSize(
      'child.grandchild',
      4,
    ),
  ).toThrow();
});

it('provides expect.toHaveArrayOfSize()', () => {
  expect({ child: { grandchild: ['i', 'contain', 4, 'items'] } }).toEqual(
    expect.toHaveArrayOfSize('child.grandchild', 4),
  );
});
