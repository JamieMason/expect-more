it('provides expect().toBeShorterThan()', () => {
  expect(['i have one item']).toBeShorterThan(['i', 'have', 4, 'items']);
});

it('provides expect().not.toBeShorterThan()', () => {
  expect(() =>
    expect(['i have one item']).not.toBeShorterThan(['i', 'have', 4, 'items']),
  ).toThrow();
});

it('provides expect.toBeShorterThan()', () => {
  expect(['i have one item']).toEqual(expect.toBeShorterThan(['i', 'have', 4, 'items']));
});
