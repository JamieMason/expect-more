import 'expect-more-jest';

it('provides expect().toBeEmptyArray()', () => {
  expect([]).toBeEmptyArray();
});

it('provides expect().not.toBeEmptyArray()', () => {
  expect(() => expect([]).not.toBeEmptyArray()).toThrow();
});

it('provides expect.toBeEmptyArray()', () => {
  expect([]).toEqual(expect.toBeEmptyArray());
});
