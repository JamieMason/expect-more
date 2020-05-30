import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveVisibleString()', () => {
  expect({ child: { grandchild: 'i am visible' } }).toHaveVisibleString('child.grandchild');
});
