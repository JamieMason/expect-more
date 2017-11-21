it('provides toBeJsonString', () => {
  expect('{}').toBeJsonString();
  expect(() => { expect(null).toBeJsonString(); }).toThrow();
  expect(() => { expect('{}').not.toBeJsonString(); }).toThrow();
});
