it('provides expect().toBeNumber()', () => {
  expect(8).toBeNumber();
});

it('provides expect().not.toBeNumber()', () => {
  expect(() => expect(8).not.toBeNumber()).toThrow();
});

it('provides expect.toBeNumber()', () => {
  expect(8).toEqual(expect.toBeNumber());
});
