it('provides expect.sameLengthAs', () => {
  expect('abc').toEqual(expect.sameLengthAs('def'));
});
