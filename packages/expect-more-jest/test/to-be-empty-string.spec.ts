it('provides expect().toBeEmptyString()', () => {
  expect('').toBeEmptyString();
});

it('provides expect().not.toBeEmptyString()', () => {
  expect(() => expect('').not.toBeEmptyString()).toThrow();
});

it('provides expect.toBeEmptyString()', () => {
  expect('').toEqual(expect.toBeEmptyString());
});
