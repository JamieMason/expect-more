import 'expect-more-jest';

it('provides expect().toBeWithinRange()', () => {
  expect(7).toBeWithinRange(0, 10);
});

it('provides expect().not.toBeWithinRange()', () => {
  expect(() => expect(7).not.toBeWithinRange(0, 10)).toThrow();
});

it('provides expect.toBeWithinRange()', () => {
  expect(7).toEqual(expect.toBeWithinRange(0, 10));
});
