it('provides expect.shorterThan', () => {
  expect('ab').toEqual(expect.shorterThan('abc'));
});
