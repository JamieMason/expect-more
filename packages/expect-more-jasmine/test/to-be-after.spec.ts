import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeAfter()', () => {
  expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
});
