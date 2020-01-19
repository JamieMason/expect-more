it('provides expect().toHaveGreaterThanOrEqualTo()', () => {
  expect({ child: { grandchild: 10 } }).toHaveGreaterThanOrEqualTo('child.grandchild', 5);
});

it('provides expect().not.toHaveGreaterThanOrEqualTo()', () => {
  expect(() =>
    expect({ child: { grandchild: 10 } }).not.toHaveGreaterThanOrEqualTo('child.grandchild', 5),
  ).toThrow();
});

it('provides expect.toHaveGreaterThanOrEqualTo()', () => {
  expect({ child: { grandchild: 10 } }).toEqual(
    expect.toHaveGreaterThanOrEqualTo('child.grandchild', 5),
  );
});
