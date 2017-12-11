it('provides toBeSameLengthAs', () => {
  expect('abc').toBeSameLengthAs('abc');
  expect([1, 2]).toBeSameLengthAs([3, 2]);
  expect(() => {
    expect('abc').toBeSameLengthAs('defghi');
  }).toThrow();
  expect(() => {
    expect([2, 4, 6]).toBeSameLengthAs([1]);
  }).toThrow();
  expect(() => {
    expect('abc').not.toBeSameLengthAs('abc');
  }).toThrow();
  expect(() => {
    expect([1, 2]).not.toBeSameLengthAs([3, 4]);
  }).toThrow();
});
