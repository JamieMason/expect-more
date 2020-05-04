import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeFunction()', () => {
  expect(() => 'i am a function').toBeFunction();
});
