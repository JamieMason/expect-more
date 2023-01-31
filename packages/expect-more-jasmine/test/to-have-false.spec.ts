import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveFalse()', () => {
  expect({ child: { grandchild: false } }).toHaveFalse('child.grandchild');
});
