it('provides toBeBefore', () => {
  expect(new Date(100)).toBeBefore(new Date(200));
  expect(() => { expect(new Date(200)).toBeBefore(new Date(100)); }).toThrow();
  expect(() => { expect(new Date(new Date(100))).not.toBeBefore(new Date(200)); }).toThrow();
});
