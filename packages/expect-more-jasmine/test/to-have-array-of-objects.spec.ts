import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveArrayOfObjects()', () => {
  expect({ child: { grandchild: [{}, new Object()] } }).toHaveArrayOfObjects('child.grandchild');
});
