// depends on https://github.com/DefinitelyTyped/DefinitelyTyped/pull/22254
it.skip('provides expect.near', () => {
  expect(1.25).toEqual(expect.near(1, 0.3));
});
