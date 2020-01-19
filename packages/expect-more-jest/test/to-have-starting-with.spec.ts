it('provides expect().toHaveStartingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toHaveStartingWith('child.grandchild', 'Java');
});

it('provides expect().not.toHaveStartingWith()', () => {
  expect(() =>
    expect({ child: { grandchild: 'JavaScript' } }).not.toHaveStartingWith(
      'child.grandchild',
      'Java',
    ),
  ).toThrow();
});

it('provides expect.toHaveStartingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toEqual(
    expect.toHaveStartingWith('child.grandchild', 'Java'),
  );
});
