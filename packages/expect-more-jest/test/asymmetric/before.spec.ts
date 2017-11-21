it('provides expect.before', () => {
  expect(new Date(100)).toEqual(expect.before(new Date(200)));
});
