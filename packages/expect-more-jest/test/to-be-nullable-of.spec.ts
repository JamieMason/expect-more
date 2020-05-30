import 'expect-more-jest';

const expectedShape = {
  x: expect.toBeNumber(),
  y: expect.toBeNumber(),
};

it('provides expect().toBeNullableOf()', () => {
  expect({ x: 0, y: 12 }).toBeNullableOf(expectedShape);
  expect(null).toBeNullableOf(expectedShape);
});

it('provides expect().not.toBeNullableOf()', () => {
  expect('mismatch').not.toBeNullableOf(expectedShape);
  expect(() => expect({ x: 0, y: 12 }).not.toBeNullableOf(expectedShape)).toThrow();
});

it('provides expect.toBeNullableOf()', () => {
  expect({ x: 0, y: 12 }).toEqual(expect.toBeNullableOf(expectedShape));
});
