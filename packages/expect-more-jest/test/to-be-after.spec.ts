it('provides expect().toBeAfter()', () => {
  expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
});

it('provides expect().not.toBeAfter()', () => {
  expect(() => expect(new Date('2020-01-01')).not.toBeAfter(new Date('2019-12-31'))).toThrow();
});

it('provides expect.toBeAfter()', () => {
  expect(new Date('2020-01-01')).toEqual(expect.toBeAfter(new Date('2019-12-31')));
});
