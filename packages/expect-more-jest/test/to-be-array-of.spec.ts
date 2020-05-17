import 'expect-more-jest';

it('provides expect().toBeArrayOf()', () => {
  expect([
    { name: 'Guybrush', age: 20 },
    { name: 'Elaine', age: 22 },
  ]).toBeArrayOf({
    name: expect.toBeNonEmptyString(),
    age: expect.toBeWithinRange(20, 30),
  });
});

it('provides expect().not.toBeArrayOf()', () => {
  expect([true, false, 'i am not a boolean']).not.toBeArrayOf(expect.toBeBoolean());
  expect(() =>
    expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).not.toBeArrayOf({
      name: expect.toBeNonEmptyString(),
    }),
  ).toThrow();
});

it('provides expect.toBeArrayOf()', () => {
  expect([{ name: 'Guybrush' }, { name: 'Elaine' }]).toEqual(
    expect.toBeArrayOf({ name: expect.toBeNonEmptyString() }),
  );
});
