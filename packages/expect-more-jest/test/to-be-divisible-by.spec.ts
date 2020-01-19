it('provides expect().toBeDivisibleBy()', () => {
  expect(12).toBeDivisibleBy(2);
});

it('provides expect().not.toBeDivisibleBy()', () => {
  expect(() => expect(12).not.toBeDivisibleBy(2)).toThrow();
});

it('provides expect.toBeDivisibleBy()', () => {
  expect(12).toEqual(expect.toBeDivisibleBy(2));
});
