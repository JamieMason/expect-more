it('provides toBeAfter', () => {
  expect(new Date(200)).toBeAfter(new Date(100));
  expect(() => {
    expect(new Date(100)).toBeAfter(new Date(200));
  }).toThrow();
  expect(() => {
    expect(new Date(new Date(200))).not.toBeAfter(new Date(100));
  }).toThrow();
});

it('provides expect.toBeAfter', () => {
  expect(new Date(200)).toEqual(expect.toBeAfter(new Date(100)));
});
