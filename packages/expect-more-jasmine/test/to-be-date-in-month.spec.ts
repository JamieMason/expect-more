import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeDateInMonth()', () => {
  expect(new Date('2021-08-29')).toBeDateInMonth(7);
});
