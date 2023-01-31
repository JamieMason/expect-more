import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveBoolean()', () => {
  expect({ child: { grandchild: false } }).toHaveBoolean('child.grandchild');
});
