// eval is workaround for typescript converting generator fns

it('provides expect().toHaveGeneratorFunction()', () => {
  expect({ child: { grandchild: eval('(function*() {yield 2;})') } }).toHaveGeneratorFunction('child.grandchild');
});

it('provides expect().not.toHaveGeneratorFunction()', () => {
  expect(() =>
    expect({ child: { grandchild: eval('(function*() {yield 2;})') } }).not.toHaveGeneratorFunction('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveGeneratorFunction()', () => {
  expect({ child: { grandchild: eval('(function*() {yield 2;})') } }).toEqual(
    expect.toHaveGeneratorFunction('child.grandchild'),
  );
});
