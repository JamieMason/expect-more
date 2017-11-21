it('provides toBeIso8601', () => {
  expect('2017-10-31T15:17:11').toBeIso8601();
  expect(() => { expect(null).toBeIso8601(); }).toThrow();
  expect(() => { expect('2017-10-31T15:17:11').not.toBeIso8601(); }).toThrow();
});
