import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeString()', () => {
  expect('i am a string').toBeString();
});
