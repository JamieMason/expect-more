import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeWhitespace()', () => {
  expect(' ').toBeWhitespace();
});
