import 'expect-more-jest';

const expectedShape = {
  x: expect.toBeNumber(),
  y: expect.toBeNumber(),
};

it('provides expect().toBeOptionalOf()', () => {
  expect({ x: 0, y: 12 }).toBeOptionalOf(expectedShape);
  expect(undefined).toBeOptionalOf(expectedShape);
});

it('provides expect().not.toBeOptionalOf()', () => {
  expect('mismatch').not.toBeOptionalOf(expectedShape);
  expect(() => expect({ x: 0, y: 12 }).not.toBeOptionalOf(expectedShape)).toThrow();
});

it('provides expect.toBeOptionalOf()', () => {
  expect({ x: 0, y: 12 }).toEqual(expect.toBeOptionalOf(expectedShape));
});
