it('provides toBeNear', () => {
  expect(1.25).toBeNear(0.30, 1);
  expect(() => { expect(1.25).toBeNear(0.10, 1); }).toThrow();
  expect(() => { expect(1.25).not.toBeNear(0.30, 1); }).toThrow();
});
