import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveEmptyArray()', () => {
  expect({ child: { grandchild: [] } }).toHaveEmptyArray('child.grandchild');
});
