import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveNumber()', () => {
  expect({ child: { grandchild: 8 } }).toHaveNumber('child.grandchild');
});
