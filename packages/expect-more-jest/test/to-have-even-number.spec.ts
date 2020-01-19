it('provides expect().toHaveEvenNumber()', () => {
  expect({ child: { grandchild: 2 } }).toHaveEvenNumber('child.grandchild');
});

it('provides expect().not.toHaveEvenNumber()', () => {
  expect(() =>
    expect({ child: { grandchild: 2 } }).not.toHaveEvenNumber('child.grandchild'),
  ).toThrow();
});

it('provides expect.toHaveEvenNumber()', () => {
  expect({ child: { grandchild: 2 } }).toEqual(expect.toHaveEvenNumber('child.grandchild'));
});
