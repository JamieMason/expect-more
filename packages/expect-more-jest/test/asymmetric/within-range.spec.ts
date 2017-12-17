// depends on https://github.com/DefinitelyTyped/DefinitelyTyped/pull/22254
it.skip('provides expect.withinRange', () => {
  expect(2).toEqual(expect.withinRange(1, 3));
});
