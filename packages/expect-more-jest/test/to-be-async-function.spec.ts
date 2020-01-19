// eval is workaround for typescript converting async to non-async

it('provides expect().toBeAsyncFunction()', () => {
  expect(eval('(async (_) => _)')).toBeAsyncFunction();
});

it('provides expect().not.toBeAsyncFunction()', () => {
  expect(() => expect(eval('(async (_) => _)')).not.toBeAsyncFunction()).toThrow();
});

it('provides expect.toBeAsyncFunction()', () => {
  expect(eval('(async (_) => _)')).toEqual(expect.toBeAsyncFunction());
});
