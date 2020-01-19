it('provides expect().toBeLongerThan()', () => {
  expect(['i', 'have', 3]).toBeLongerThan([2, 'items']);
});

it('provides expect().not.toBeLongerThan()', () => {
  expect(() => expect(['i', 'have', 3]).not.toBeLongerThan([2, 'items'])).toThrow();
});

it('provides expect.toBeLongerThan()', () => {
  expect(['i', 'have', 3]).toEqual(expect.toBeLongerThan([2, 'items']));
});
