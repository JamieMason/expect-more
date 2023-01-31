import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeDateInYear()', () => {
  expect(new Date('2021-08-29')).toBeDateInYear(2021);
});
