import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveLongerThan()', () => {
  expect({ child: { grandchild: ['i', 'have', 3] } }).toHaveLongerThan('child.grandchild', [
    2,
    'items',
  ]);
});
