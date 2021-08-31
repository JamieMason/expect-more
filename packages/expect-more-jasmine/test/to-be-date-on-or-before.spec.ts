import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeDateOnOrBefore()', () => {
  expect(new Date('2019-12-15')).toBeDateOnOrBefore(new Date('2019-12-31'));
});
