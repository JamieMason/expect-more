import 'expect-more-jest';

it('provides expect().toBeDateBetween()', () => {
  expect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
});

it('provides expect().not.toBeDateBetween()', () => {
  expect(() =>
    expect(new Date('2019-12-11')).not.toBeDateBetween(
      new Date('2019-12-10'),
      new Date('2019-12-12'),
    ),
  ).toThrow();
});

it('provides expect.toBeDateBetween()', () => {
  expect(new Date('2019-12-11')).toEqual(
    expect.toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12')),
  );
});
