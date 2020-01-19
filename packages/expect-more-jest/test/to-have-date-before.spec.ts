it('provides expect().toHaveDateBefore()', () => {
  expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDateBefore(
    'child.grandchild',
    new Date('2020-01-01'),
  );
});

it('provides expect().not.toHaveDateBefore()', () => {
  expect(() =>
    expect({ child: { grandchild: new Date('2019-12-31') } }).not.toHaveDateBefore(
      'child.grandchild',
      new Date('2020-01-01'),
    ),
  ).toThrow();
});

it('provides expect.toHaveDateBefore()', () => {
  expect({ child: { grandchild: new Date('2019-12-31') } }).toEqual(
    expect.toHaveDateBefore('child.grandchild', new Date('2020-01-01')),
  );
});
