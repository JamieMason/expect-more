it('provides expect().toHaveIso8601()', () => {
  expect({ child: { grandchild: '1999-12-31T23:59:59' } }).toHaveIso8601('child.grandchild');
});

it('provides expect().not.toHaveIso8601()', () => {
  expect(() =>
    expect({ child: { grandchild: '1999-12-31T23:59:59' } }).not.toHaveIso8601('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveIso8601()', () => {
  expect({ child: { grandchild: '1999-12-31T23:59:59' } }).toEqual(
    expect.toHaveIso8601('child.grandchild'),
  );
});
