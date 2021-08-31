import 'expect-more-jest';

it('provides expect().toBeDateOnOrAfter()', () => {
  expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
});

it('provides expect().not.toBeDateOnOrAfter()', () => {
  expect(() =>
    expect(new Date('2019-12-31')).not.toBeDateOnOrAfter(new Date('2019-12-15')),
  ).toThrow();
});

it('provides expect.toBeDateOnOrAfter()', () => {
  expect(new Date('2019-12-31')).toEqual(expect.toBeDateOnOrAfter(new Date('2019-12-15')));
});
