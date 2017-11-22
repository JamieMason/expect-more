it('provides toBeSameLengthAs', () => {
  expect('abc').toBeSameLengthAs('abc');
  expect(() => {
    expect('abc').toBeSameLengthAs('defghi');
  }).toThrow();
  expect(() => {
    expect('abc').not.toBeSameLengthAs('abc');
  }).toThrow();
});
