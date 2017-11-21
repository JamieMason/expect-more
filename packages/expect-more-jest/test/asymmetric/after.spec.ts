it('provides expect.after', () => {
  expect(new Date(200)).toEqual(expect.after(new Date(100)));
});
