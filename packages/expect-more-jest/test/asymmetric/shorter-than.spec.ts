it('provides expect.shorterThan', () => {
  expect('ab').toEqual(expect.shorterThan('abc'));
  expect([2, 3]).toEqual(expect.shorterThan([3, 7, 2]));
});
