import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeDateBetween()', () => {
  expect(new Date('2019-12-11')).toBeDateBetween(new Date('2019-12-10'), new Date('2019-12-12'));
});
