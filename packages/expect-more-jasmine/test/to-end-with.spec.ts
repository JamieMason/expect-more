import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toEndWith()', () => {
  expect('JavaScript').toEndWith('Script');
});
