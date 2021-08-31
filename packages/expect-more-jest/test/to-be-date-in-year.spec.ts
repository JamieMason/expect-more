import 'expect-more-jest';

it('provides expect().toBeDateInYear()', () => {
  expect(new Date('2021-08-29')).toBeDateInYear(2021);
});

it('provides expect().not.toBeDateInYear()', () => {
  expect(() => expect(new Date('2021-08-29')).not.toBeDateInYear(2021)).toThrow();
});

it('provides expect.toBeDateInYear()', () => {
  expect(new Date('2021-08-29')).toEqual(expect.toBeDateInYear(2021));
});
