import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveCalculable()', () => {
  expect({ child: { grandchild: '100' } }).toHaveCalculable('child.grandchild');
});
