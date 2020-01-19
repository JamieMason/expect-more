it('provides expect().toBeFalse()', () => {
  expect(false).toBeFalse();
});

it('provides expect().not.toBeFalse()', () => {
  expect(() => expect(false).not.toBeFalse()).toThrow();
});

it('provides expect.toBeFalse()', () => {
  expect(false).toEqual(expect.toBeFalse());
});
