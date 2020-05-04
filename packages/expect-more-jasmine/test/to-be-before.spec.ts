import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeBefore()', () => {
  expect(new Date('2019-12-31')).toBeBefore(new Date('2020-01-01'));
});
