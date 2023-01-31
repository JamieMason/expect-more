import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNonEmptyArray()', () => {
  expect({ child: { grandchild: ['i', 'am not empty'] } }).toHaveNonEmptyArray('child.grandchild');
});
