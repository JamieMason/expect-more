import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeRegExp()', () => {
  expect(new RegExp('i am a regular expression')).toBeRegExp();
});
