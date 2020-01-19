it('provides expect().toBeArrayOfSize()', () => {
  expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
});

it('provides expect().not.toBeArrayOfSize()', () => {
  expect(() => expect(['i', 'contain', 4, 'items']).not.toBeArrayOfSize(4)).toThrow();
});

it('provides expect.toBeArrayOfSize()', () => {
  expect(['i', 'contain', 4, 'items']).toEqual(expect.toBeArrayOfSize(4));
});
