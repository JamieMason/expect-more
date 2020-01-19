it('provides expect().toHaveValidDate()', () => {
  expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveValidDate('child.grandchild');
});

it('provides expect().not.toHaveValidDate()', () => {
  expect(() =>
    expect({ child: { grandchild: new Date('2020-01-01') } }).not.toHaveValidDate(
      'child.grandchild',
    ),
  ).toThrow();
});

it('provides expect.toHaveValidDate()', () => {
  expect({ child: { grandchild: new Date('2020-01-01') } }).toEqual(
    expect.toHaveValidDate('child.grandchild'),
  );
});
