import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveEmptyObject()', () => {
  expect({ child: { grandchild: {} } }).toHaveEmptyObject('child.grandchild');
});
