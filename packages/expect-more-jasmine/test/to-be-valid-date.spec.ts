import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeValidDate()', () => {
  expect(new Date('2020-01-01')).toBeValidDate();
});
