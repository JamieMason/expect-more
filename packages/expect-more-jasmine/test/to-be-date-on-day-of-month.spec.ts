import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeDateOnDayOfMonth()', () => {
  expect(new Date('2021-08-29')).toBeDateOnDayOfMonth(29);
});
