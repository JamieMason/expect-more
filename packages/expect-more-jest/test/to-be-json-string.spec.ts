it('provides toBeJsonString', () => {
  expect('{}').toBeJsonString();
  expect(() => {
    expect(null).toBeJsonString();
  }).toThrow();
  expect(() => {
    expect('{}').not.toBeJsonString();
  }).toThrow();
});

it('provides expect.toBeJsonString', () => {
  expect('{}').toEqual(expect.toBeJsonString());
});
