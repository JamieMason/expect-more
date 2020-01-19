it('provides expect().toHaveEndingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toHaveEndingWith('child.grandchild', 'Script');
});

it('provides expect().not.toHaveEndingWith()', () => {
  expect(() =>
    expect({ child: { grandchild: 'JavaScript' } }).not.toHaveEndingWith(
      'child.grandchild',
      'Script',
    ),
  ).toThrow();
});

it('provides expect.toHaveEndingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toEqual(
    expect.toHaveEndingWith('child.grandchild', 'Script'),
  );
});
