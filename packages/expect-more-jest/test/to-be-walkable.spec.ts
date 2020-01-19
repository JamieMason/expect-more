it('provides expect().toBeWalkable()', () => {
  expect({}).toBeWalkable();
});

it('provides expect().not.toBeWalkable()', () => {
  expect(() => expect({}).not.toBeWalkable()).toThrow();
});

it('provides expect.toBeWalkable()', () => {
  expect({}).toEqual(expect.toBeWalkable());
});
