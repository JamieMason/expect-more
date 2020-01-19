// eval is workaround for typescript converting async to non-async

it('provides expect().toHaveAsyncFunction()', () => {
  expect({ child: { grandchild: eval('(async (_) => _)') } }).toHaveAsyncFunction(
    'child.grandchild',
  );
});

it('provides expect().not.toHaveAsyncFunction()', () => {
  expect(() =>
    expect({ child: { grandchild: eval('(async (_) => _)') } }).not.toHaveAsyncFunction(
      'child.grandchild',
    ),
  ).toThrow();
});

it('provides expect.toHaveAsyncFunction()', () => {
  expect({ child: { grandchild: eval('(async (_) => _)') } }).toEqual(
    expect.toHaveAsyncFunction('child.grandchild'),
  );
});
