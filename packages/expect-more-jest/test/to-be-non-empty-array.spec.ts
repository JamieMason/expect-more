import 'expect-more-jest';

it('provides expect().toBeNonEmptyArray()', () => {
  expect(['i', 'am not empty']).toBeNonEmptyArray();
});

it('provides expect().not.toBeNonEmptyArray()', () => {
  expect(() => expect(['i', 'am not empty']).not.toBeNonEmptyArray()).toThrow();
});

it('provides expect.toBeNonEmptyArray()', () => {
  expect(['i', 'am not empty']).toEqual(expect.toBeNonEmptyArray());
});
