it('provides expect().toHaveDateAfter()', () => {
  expect({ child: { grandchild: new Date('2020-01-01') } }).toHaveDateAfter('child.grandchild', new Date('2019-12-31'));
});

it('provides expect().not.toHaveDateAfter()', () => {
  expect(() =>
    expect({ child: { grandchild: new Date('2020-01-01') } }).not.toHaveDateAfter(
      'child.grandchild',
      new Date('2019-12-31'),
    ),
  ).toThrow();
});

it('provides expect.toHaveDateAfter()', () => {
  expect({ child: { grandchild: new Date('2020-01-01') } }).toEqual(
    expect.toHaveDateAfter('child.grandchild', new Date('2019-12-31')),
  );
});
