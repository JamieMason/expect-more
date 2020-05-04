import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveBoolean()', () => {
  expect({ child: { grandchild: false } }).toHaveBoolean('child.grandchild');
});
