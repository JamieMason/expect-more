it('provides toBeNear', () => {
  expect(1.25).toBeNear(0.3, 1);
  expect(() => {
    expect(1.25).toBeNear(0.1, 1);
  }).toThrow();
  expect(() => {
    expect(1.25).not.toBeNear(0.3, 1);
  }).toThrow();
});
