import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveCalculable()', () => {
  expect({ child: { grandchild: '100' } }).toHaveCalculable('child.grandchild');
});
