import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveVisibleString()', () => {
  expect({ child: { grandchild: 'i am visible' } }).toHaveVisibleString('child.grandchild');
});
