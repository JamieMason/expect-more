it('provides toBeCalculable', () => {
  expect('1').toBeCalculable();
  expect(() => {
    expect({}).toBeCalculable();
  }).toThrow();
  expect(() => {
    expect('1').not.toBeCalculable();
  }).toThrow();
});

it('provides expect.toBeCalculable', () => {
  expect('1').toEqual(expect.toBeCalculable());
});
