import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeJsonString()', () => {
  expect('{"i":"am valid JSON"}').toBeJsonString();
});
