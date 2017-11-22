it('provides toBeValidDate', () => {
  expect(new Date(1)).toBeValidDate();
  expect(() => {
    expect(new Date('never gonna')).toBeValidDate();
  }).toThrow();
  expect(() => {
    expect(new Date(1)).not.toBeValidDate();
  }).toThrow();
});
