import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeFunction()', () => {
  expect(() => 'i am a function').toBeFunction();
});
