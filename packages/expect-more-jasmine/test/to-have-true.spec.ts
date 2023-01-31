import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveTrue()', () => {
  expect({ child: { grandchild: true } }).toHaveTrue('child.grandchild');
});
