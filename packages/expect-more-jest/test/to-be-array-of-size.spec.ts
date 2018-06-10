it('provides toBeArrayOfSize', () => {
  expect([1]).toBeArrayOfSize(1);
  expect(() => {
    expect([1]).toBeArrayOfSize(2);
  }).toThrow();
  expect(() => {
    expect([1]).not.toBeArrayOfSize(1);
  }).toThrow();
});

it('provides expect.toBeArrayOfSize', () => {
  expect([1]).toEqual(expect.toBeArrayOfSize(1));
});
