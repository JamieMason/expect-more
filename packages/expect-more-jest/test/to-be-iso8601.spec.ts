it('provides expect().toBeIso8601()', () => {
  expect('1999-12-31T23:59:59').toBeIso8601();
});

it('provides expect().not.toBeIso8601()', () => {
  expect(() => expect('1999-12-31T23:59:59').not.toBeIso8601()).toThrow();
});

it('provides expect.toBeIso8601()', () => {
  expect('1999-12-31T23:59:59').toEqual(expect.toBeIso8601());
});
