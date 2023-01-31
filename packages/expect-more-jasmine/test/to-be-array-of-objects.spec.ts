import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toBeArrayOfObjects()', () => {
  expect([{}, new Object()]).toBeArrayOfObjects();
});
