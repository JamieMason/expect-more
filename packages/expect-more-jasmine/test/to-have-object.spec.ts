import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveObject()', () => {
  expect({ child: { grandchild: {} } }).toHaveObject('child.grandchild');
});
