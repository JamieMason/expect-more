import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeVisibleString()', () => {
  expect('i am visible').toBeVisibleString();
});
