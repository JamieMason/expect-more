import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveEmptyObject()', () => {
  expect({ child: { grandchild: {} } }).toHaveEmptyObject('child.grandchild');
});
