import 'expect-more-jest';

it('provides expect().toBeArrayOfStrings()', () => {
  expect(['we', 'are', 'all', 'strings']).toBeArrayOfStrings();
});

it('provides expect().not.toBeArrayOfStrings()', () => {
  expect(() => expect(['we', 'are', 'all', 'strings']).not.toBeArrayOfStrings()).toThrow();
});

it('provides expect.toBeArrayOfStrings()', () => {
  expect(['we', 'are', 'all', 'strings']).toEqual(expect.toBeArrayOfStrings());
});
