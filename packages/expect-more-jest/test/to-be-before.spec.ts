it('provides expect().toBeBefore()', () => {
  expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
});

it('provides expect().not.toBeBefore()', () => {
  expect(() => expect(new Date('2019-12-31')).not.toBeBefore(new Date('2020-01-01'))).toThrow();
});

it('provides expect.toBeBefore()', () => {
  expect(new Date('2019-12-31')).toEqual(expect.toBeBefore(new Date('2020-01-01')));
});
