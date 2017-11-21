it('provides toBeNonEmptyString', () => {
  expect('a').toBeNonEmptyString();
  expect(() => { expect('').toBeNonEmptyString(); }).toThrow();
  expect(() => { expect('a').not.toBeNonEmptyString(); }).toThrow();
});
