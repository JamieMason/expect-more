it('provides expect().toHaveSameLengthAs()', () => {
  expect({ child: { grandchild: ['i also have', '2 items'] } }).toHaveSameLengthAs('child.grandchild', [
    'i have',
    '2 items',
  ]);
});

it('provides expect().not.toHaveSameLengthAs()', () => {
  expect(() =>
    expect({ child: { grandchild: ['i also have', '2 items'] } }).not.toHaveSameLengthAs('child.grandchild', [
      'i have',
      '2 items',
    ]),
  ).toThrow();
});

it('provides expect.toHaveSameLengthAs()', () => {
  expect({ child: { grandchild: ['i also have', '2 items'] } }).toEqual(
    expect.toHaveSameLengthAs('child.grandchild', ['i have', '2 items']),
  );
});
