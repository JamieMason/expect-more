import 'expect-more-jest';

it('provides expect().toBeArray()', () => {
  expect([2, true, 'string']).toBeArray();
});

it('provides expect().not.toBeArray()', () => {
  expect(() => expect([2, true, 'string']).not.toBeArray()).toThrow();
});

it('provides expect.toBeArray()', () => {
  expect([2, true, 'string']).toEqual(expect.toBeArray());
});
