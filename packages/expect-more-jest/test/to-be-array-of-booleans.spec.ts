import 'expect-more-jest';

it('provides expect().toBeArrayOfBooleans()', () => {
  expect([true, false, new Boolean(true)]).toBeArrayOfBooleans();
});

it('provides expect().not.toBeArrayOfBooleans()', () => {
  expect(() => expect([true, false, new Boolean(true)]).not.toBeArrayOfBooleans()).toThrow();
});

it('provides expect.toBeArrayOfBooleans()', () => {
  expect([true, false, new Boolean(true)]).toEqual(expect.toBeArrayOfBooleans());
});
