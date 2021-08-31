import 'expect-more-jest';

it('provides expect().toBeArrayIncludingOnly()', () => {
  expect([5, 10, 1]).toBeArrayIncludingOnly([1, 5, 10]);
});

it('provides expect().not.toBeArrayIncludingOnly()', () => {
  expect(() => expect([5, 10, 1]).not.toBeArrayIncludingOnly([1, 5, 10])).toThrow();
});

it('provides expect.toBeArrayIncludingOnly()', () => {
  expect([5, 10, 1]).toEqual(expect.toBeArrayIncludingOnly([1, 5, 10]));
});
