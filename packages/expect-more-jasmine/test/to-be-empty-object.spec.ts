import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeEmptyObject()', () => {
  expect({}).toBeEmptyObject();
});
