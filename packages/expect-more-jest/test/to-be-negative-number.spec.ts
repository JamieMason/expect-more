import 'expect-more-jest';

it('provides expect().toBeNegativeNumber()', () => {
  expect(-18).toBeNegativeNumber();
});

it('provides expect().not.toBeNegativeNumber()', () => {
  expect(() => expect(-18).not.toBeNegativeNumber()).toThrow();
});

it('provides expect.toBeNegativeNumber()', () => {
  expect(-18).toEqual(expect.toBeNegativeNumber());
});
