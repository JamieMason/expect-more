it('provides expect().toHaveRegExp()', () => {
  expect({ child: { grandchild: new RegExp('i am a regular expression') } }).toHaveRegExp(
    'child.grandchild',
  );
});

it('provides expect().not.toHaveRegExp()', () => {
  expect(() =>
    expect({ child: { grandchild: new RegExp('i am a regular expression') } }).not.toHaveRegExp(
      'child.grandchild',
    ),
  ).toThrow();
});

it('provides expect.toHaveRegExp()', () => {
  expect({ child: { grandchild: new RegExp('i am a regular expression') } }).toEqual(
    expect.toHaveRegExp('child.grandchild'),
  );
});
