it('provides expect().toHaveShorterThan()', () => {
  expect({ child: { grandchild: ['i have one item'] } }).toHaveShorterThan('child.grandchild', [
    'i',
    'have',
    4,
    'items',
  ]);
});

it('provides expect().not.toHaveShorterThan()', () => {
  expect(() =>
    expect({ child: { grandchild: ['i have one item'] } }).not.toHaveShorterThan(
      'child.grandchild',
      ['i', 'have', 4, 'items'],
    ),
  ).toThrow();
});

it('provides expect.toHaveShorterThan()', () => {
  expect({ child: { grandchild: ['i have one item'] } }).toEqual(
    expect.toHaveShorterThan('child.grandchild', ['i', 'have', 4, 'items']),
  );
});
