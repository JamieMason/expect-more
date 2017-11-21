it('provides expect.nonEmptyObject', () => {
  expect({ a: 1 }).toEqual(expect.nonEmptyObject());
});
