import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveNonEmptyArray()', () => {
  expect({ child: { grandchild: ['i', 'am not empty'] } }).toHaveNonEmptyArray('child.grandchild');
});
