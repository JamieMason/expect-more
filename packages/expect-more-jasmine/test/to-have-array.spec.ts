import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveArray()', () => {
  expect({ child: { grandchild: [2, true, 'string'] } }).toHaveArray('child.grandchild');
});
