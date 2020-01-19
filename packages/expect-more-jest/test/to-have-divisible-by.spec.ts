it('provides expect().toHaveDivisibleBy()', () => {
  expect({ child: { grandchild: 12 } }).toHaveDivisibleBy('child.grandchild', 2);
});

it('provides expect().not.toHaveDivisibleBy()', () => {
  expect(() =>
    expect({ child: { grandchild: 12 } }).not.toHaveDivisibleBy('child.grandchild', 2),
  ).toThrow();
});

it('provides expect.toHaveDivisibleBy()', () => {
  expect({ child: { grandchild: 12 } }).toEqual(expect.toHaveDivisibleBy('child.grandchild', 2));
});
