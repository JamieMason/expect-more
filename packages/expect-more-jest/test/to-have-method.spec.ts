it('provides expect().toHaveMethod()', () => {
  expect({ child: { grandchild: () => 'i am a function' } }).toHaveMethod('child.grandchild');
});

it('provides expect().not.toHaveMethod()', () => {
  expect(() =>
    expect({ child: { grandchild: () => 'i am a function' } }).not.toHaveMethod('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveMethod()', () => {
  expect({ child: { grandchild: () => 'i am a function' } }).toEqual(
    expect.toHaveMethod('child.grandchild'),
  );
});
