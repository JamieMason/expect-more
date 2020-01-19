it('provides expect().toHaveString()', () => {
  expect({ child: { grandchild: 'i am a string' } }).toHaveString('child.grandchild');
});

it('provides expect().not.toHaveString()', () => {
  expect(() =>
    expect({ child: { grandchild: 'i am a string' } }).not.toHaveString('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveString()', () => {
  expect({ child: { grandchild: 'i am a string' } }).toEqual(
    expect.toHaveString('child.grandchild'),
  );
});
