it('provides expect().toHaveLongerThan()', () => {
  expect({ child: { grandchild: ['i', 'have', 3] } }).toHaveLongerThan('child.grandchild', [2, 'items']);
});

it('provides expect().not.toHaveLongerThan()', () => {
  expect(() =>
    expect({ child: { grandchild: ['i', 'have', 3] } }).not.toHaveLongerThan('child.grandchild', [2, 'items']),
  ).toThrow();
});

it('provides expect.toHaveLongerThan()', () => {
  expect({ child: { grandchild: ['i', 'have', 3] } }).toEqual(
    expect.toHaveLongerThan('child.grandchild', [2, 'items']),
  );
});
