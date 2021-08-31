import 'expect-more-jest';

it('provides expect().toBeDateOnDayOfMonth()', () => {
  expect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
});

it('provides expect().not.toBeDateOnDayOfMonth()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateOnDayOfMonth(29)).toThrow();
});

it('provides expect.toBeDateOnDayOfMonth()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateOnDayOfMonth(29));
});
