import 'expect-more-jest';

it('provides expect().toBeDateOnOrBefore()', () => {
  expect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
});

it('provides expect().not.toBeDateOnOrBefore()', () => {
  expect(() =>
    expect(new Date('2019-12-15')).not.toBeDateOnOrBefore(new Date('2019-12-31')),
  ).toThrow();
});

it('provides expect.toBeDateOnOrBefore()', () => {
  expect(new Date('2019-12-15')).toEqual(expect.toBeDateOnOrBefore(new Date('2019-12-31')));
});
