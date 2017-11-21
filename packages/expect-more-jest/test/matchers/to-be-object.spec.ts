it('provides toBeObject', () => {
  expect({}).toBeObject();
  expect(() => { expect(null).toBeObject(); }).toThrow();
  expect(() => { expect({}).not.toBeObject(); }).toThrow();
});
