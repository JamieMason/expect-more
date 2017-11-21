it('provides expect.near', () => {
  expect(1.25).toEqual(expect.near(1, 0.3));
});
