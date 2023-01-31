import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNonEmptyObject()', () => {
  expect({ child: { grandchild: { i: 'am not empty' } } }).toHaveNonEmptyObject('child.grandchild');
});
