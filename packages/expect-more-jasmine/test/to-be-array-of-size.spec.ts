import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArrayOfSize()', () => {
  expect(['i', 'contain', 4, 'items']).toBeArrayOfSize(4);
});
