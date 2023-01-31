import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveShorterThan()', () => {
  expect({ child: { grandchild: ['i have one item'] } }).toHaveShorterThan('child.grandchild', [
    'i',
    'have',
    4,
    'items',
  ]);
});
