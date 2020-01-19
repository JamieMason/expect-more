it('provides expect().toHaveArrayOfObjects()', () => {
  expect({ child: { grandchild: [{}, new Object()] } }).toHaveArrayOfObjects('child.grandchild');
});

it('provides expect().not.toHaveArrayOfObjects()', () => {
  expect(() =>
    expect({ child: { grandchild: [{}, new Object()] } }).not.toHaveArrayOfObjects('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveArrayOfObjects()', () => {
  expect({ child: { grandchild: [{}, new Object()] } }).toEqual(expect.toHaveArrayOfObjects('child.grandchild'));
});
