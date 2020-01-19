it('provides expect().toHaveDecimalNumber()', () => {
  expect({ child: { grandchild: 12.55 } }).toHaveDecimalNumber('child.grandchild');
});

it('provides expect().not.toHaveDecimalNumber()', () => {
  expect(() => expect({ child: { grandchild: 12.55 } }).not.toHaveDecimalNumber('child.grandchild')).toThrow();
});

it('provides expect.toHaveDecimalNumber()', () => {
  expect({ child: { grandchild: 12.55 } }).toEqual(expect.toHaveDecimalNumber('child.grandchild'));
});
