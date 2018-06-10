it('provides toBeNonEmptyArray', () => {
  expect([1, 2]).toBeNonEmptyArray();
  expect(() => {
    expect([]).toBeNonEmptyArray();
  }).toThrow();
  expect(() => {
    expect([1, 2]).not.toBeNonEmptyArray();
  }).toThrow();
});

it('provides expect.toBeNonEmptyArray', () => {
  expect([1, 2]).toEqual(expect.toBeNonEmptyArray());
});
