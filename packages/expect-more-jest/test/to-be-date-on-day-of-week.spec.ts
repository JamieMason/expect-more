import 'expect-more-jest';

it('provides expect().toBeDateOnDayOfWeek()', () => {
  expect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
});

it('provides expect().not.toBeDateOnDayOfWeek()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateOnDayOfWeek(0)).toThrow();
});

it('provides expect.toBeDateOnDayOfWeek()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateOnDayOfWeek(0));
});
