import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toBeArrayOfObjects()', () => {
  expect([{}, new Object()]).toBeArrayOfObjects();
});
