import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveFalse()', () => {
  expect({ child: { grandchild: false } }).toHaveFalse('child.grandchild');
});
