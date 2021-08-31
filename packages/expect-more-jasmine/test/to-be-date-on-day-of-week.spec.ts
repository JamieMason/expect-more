import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeDateOnDayOfWeek()', () => {
  expect(new Date('2021-08-29')).toBeDateOnDayOfWeek(0);
});
