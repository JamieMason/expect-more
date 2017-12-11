it('provides expect.longerThan', () => {
  expect('abc').toEqual(expect.longerThan('a'));
  expect([7, 6, 0]).toEqual(expect.longerThan([1]));
});
