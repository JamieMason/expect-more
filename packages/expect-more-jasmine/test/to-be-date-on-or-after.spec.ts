import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeDateOnOrAfter()', () => {
  expect(new Date('2019-12-31')).toBeDateOnOrAfter(new Date('2019-12-15'));
});
