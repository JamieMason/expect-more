import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveObject()', () => {
  expect({ child: { grandchild: {} } }).toHaveObject('child.grandchild');
});
