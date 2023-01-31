import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeVisibleString()', () => {
  expect('i am visible').toBeVisibleString();
});
