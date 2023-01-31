import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeAfter()', () => {
  expect(new Date('2020-01-01')).toBeAfter(new Date('2019-12-31'));
});
