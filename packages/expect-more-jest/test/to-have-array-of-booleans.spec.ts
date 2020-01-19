it('provides expect().toHaveArrayOfBooleans()', () => {
  expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toHaveArrayOfBooleans('child.grandchild');
});

it('provides expect().not.toHaveArrayOfBooleans()', () => {
  expect(() =>
    expect({ child: { grandchild: [true, false, new Boolean(true)] } }).not.toHaveArrayOfBooleans('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveArrayOfBooleans()', () => {
  expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toEqual(
    expect.toHaveArrayOfBooleans('child.grandchild'),
  );
});
