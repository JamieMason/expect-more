import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toEndWith()', () => {
  expect('JavaScript').toEndWith('Script');
});
