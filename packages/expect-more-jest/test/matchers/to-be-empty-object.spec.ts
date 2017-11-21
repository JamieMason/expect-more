it('provides toBeEmptyObject', () => {
  expect({}).toBeEmptyObject();
  expect(() => { expect(null).toBeEmptyObject(); }).toThrow();
  expect(() => { expect({}).not.toBeEmptyObject(); }).toThrow();
});
