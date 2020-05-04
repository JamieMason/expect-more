import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeDate()', () => {
  expect(new Date('2019-12-31')).toBeDate();
});
