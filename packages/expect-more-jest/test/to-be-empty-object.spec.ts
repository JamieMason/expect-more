it('provides expect().toBeEmptyObject()', () => {
  expect({}).toBeEmptyObject();
});

it('provides expect().not.toBeEmptyObject()', () => {
  expect(() => expect({}).not.toBeEmptyObject()).toThrow();
});

it('provides expect.toBeEmptyObject()', () => {
  expect({}).toEqual(expect.toBeEmptyObject());
});
