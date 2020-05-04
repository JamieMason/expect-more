import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveEmptyArray()', () => {
  expect({ child: { grandchild: [] } }).toHaveEmptyArray('child.grandchild');
});
