import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeJsonString()', () => {
  expect('{"i":"am valid JSON"}').toBeJsonString();
});
