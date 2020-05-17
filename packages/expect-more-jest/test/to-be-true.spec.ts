import 'expect-more-jest';

it('provides expect().toBeTrue()', () => {
  expect(true).toBeTrue();
});

it('provides expect().not.toBeTrue()', () => {
  expect(() => expect(true).not.toBeTrue()).toThrow();
});

it('provides expect.toBeTrue()', () => {
  expect(true).toEqual(expect.toBeTrue());
});
