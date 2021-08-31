import 'expect-more-jest';

it('provides expect().toBeDateInMonth()', () => {
  expect(new Date('2021-08-29')).toBeDateInMonth(7);
});

it('provides expect().not.toBeDateInMonth()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateInMonth(7)).toThrow();
});

it('provides expect.toBeDateInMonth()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateInMonth(7));
});
