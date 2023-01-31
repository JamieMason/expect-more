import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeValidDate()', () => {
  expect(new Date('2020-01-01')).toBeValidDate();
});
