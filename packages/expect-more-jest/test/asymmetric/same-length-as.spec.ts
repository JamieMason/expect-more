it('provides expect.sameLengthAs', () => {
  expect('abc').toEqual(expect.sameLengthAs('def'));
  expect([1, 2]).toEqual(expect.sameLengthAs([3, 4]));
});
