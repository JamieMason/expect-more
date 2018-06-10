it('provides toBeNonEmptyString', () => {
  expect('a').toBeNonEmptyString();
  expect(() => {
    expect('').toBeNonEmptyString();
  }).toThrow();
  expect(() => {
    expect('a').not.toBeNonEmptyString();
  }).toThrow();
});

it('provides expect.toBeNonEmptyString', () => {
  expect('a').toEqual(expect.toBeNonEmptyString());
});
