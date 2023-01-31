import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveArrayOfObjects()', () => {
  expect({ child: { grandchild: [{}, new Object()] } }).toHaveArrayOfObjects('child.grandchild');
});
