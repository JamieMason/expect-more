import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeWhitespace()', () => {
  expect(' ').toBeWhitespace();
});
