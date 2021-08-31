import 'expect-more-jest';

it('provides expect().toBeNil()', () => {
  expect(undefined).toBeNil();
});

it('provides expect().not.toBeNil()', () => {
  expect(() => expect(undefined).not.toBeNil()).toThrow();
});

it('provides expect.toBeNil()', () => {
  expect(undefined).toEqual(expect.toBeNil());
});
