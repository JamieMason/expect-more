it('provides toHaveNumberWithinRange', () => {
  expect({ foo: { bar: 2 } }).toHaveNumberWithinRange('foo.bar', 1, 3);
  expect(() => {
    expect({ foo: { bar: 4 } }).toHaveNumberWithinRange('miss', 1, 3);
  }).toThrow();
  expect(() => {
    expect({ foo: { bar: 2 } }).not.toHaveNumberWithinRange('foo.bar', 1, 3);
  }).toThrow();
});

describe.skip('when Jest supports variadic asymmetric matchers', () => {
  it('provides expect.toHaveNumberWithinRange', () => {
    expect({ foo: { bar: 2 } }).toEqual(expect.toHaveNumberWithinRange('foo.bar', 1, 3));
  });
});
