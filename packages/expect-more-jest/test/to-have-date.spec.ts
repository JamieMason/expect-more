it('provides expect().toHaveDate()', () => {
  expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDate('child.grandchild');
});

it('provides expect().not.toHaveDate()', () => {
  expect(() =>
    expect({ child: { grandchild: new Date('2019-12-31') } }).not.toHaveDate('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveDate()', () => {
  expect({ child: { grandchild: new Date('2019-12-31') } }).toEqual(
    expect.toHaveDate('child.grandchild'),
  );
});
