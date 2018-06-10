it('provides toBeDivisibleBy', () => {
  expect(4).toBeDivisibleBy(2);
  expect(() => {
    expect(3).toBeDivisibleBy(2);
  }).toThrow();
  expect(() => {
    expect(4).not.toBeDivisibleBy(2);
  }).toThrow();
});

it('provides expect.toBeDivisibleBy', () => {
  expect(4).toEqual(expect.toBeDivisibleBy(2));
});
