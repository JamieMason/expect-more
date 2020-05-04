import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveNonEmptyObject()', () => {
  expect({ child: { grandchild: { i: 'am not empty' } } }).toHaveNonEmptyObject('child.grandchild');
});
