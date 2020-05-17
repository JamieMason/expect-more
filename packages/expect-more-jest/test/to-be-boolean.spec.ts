import 'expect-more-jest';

it('provides expect().toBeBoolean()', () => {
  expect(false).toBeBoolean();
});

it('provides expect().not.toBeBoolean()', () => {
  expect(() => expect(false).not.toBeBoolean()).toThrow();
});

it('provides expect.toBeBoolean()', () => {
  expect(false).toEqual(expect.toBeBoolean());
});
