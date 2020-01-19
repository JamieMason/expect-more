it('provides expect().toHaveJsonString()', () => {
  expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).toHaveJsonString('child.grandchild');
});

it('provides expect().not.toHaveJsonString()', () => {
  expect(() =>
    expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).not.toHaveJsonString(
      'child.grandchild',
    ),
  ).toThrow();
});

it('provides expect.toHaveJsonString()', () => {
  expect({ child: { grandchild: '{"i":"am valid JSON"}' } }).toEqual(
    expect.toHaveJsonString('child.grandchild'),
  );
});
