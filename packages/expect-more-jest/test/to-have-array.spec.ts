it('provides expect().toHaveArray()', () => {
  expect({ child: { grandchild: [2, true, 'string'] } }).toHaveArray('child.grandchild');
});

it('provides expect().not.toHaveArray()', () => {
  expect(() =>
    expect({ child: { grandchild: [2, true, 'string'] } }).not.toHaveArray('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveArray()', () => {
  expect({ child: { grandchild: [2, true, 'string'] } }).toEqual(
    expect.toHaveArray('child.grandchild'),
  );
});
