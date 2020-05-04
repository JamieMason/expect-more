import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveTrue()', () => {
  expect({ child: { grandchild: true } }).toHaveTrue('child.grandchild');
});
