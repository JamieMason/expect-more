import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveNumber()', () => {
  expect({ child: { grandchild: 8 } }).toHaveNumber('child.grandchild');
});
