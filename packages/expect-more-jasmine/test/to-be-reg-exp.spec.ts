import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeRegExp()', () => {
  expect(new RegExp('i am a regular expression')).toBeRegExp();
});
