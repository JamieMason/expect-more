it('provides expect().toHaveFalse()', () => {
  expect({ child: { grandchild: false } }).toHaveFalse('child.grandchild');
});

it('provides expect().not.toHaveFalse()', () => {
  expect(() =>
    expect({ child: { grandchild: false } }).not.toHaveFalse('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveFalse()', () => {
  expect({ child: { grandchild: false } }).toEqual(expect.toHaveFalse('child.grandchild'));
});
