import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveIso8601()', () => {
  expect({ child: { grandchild: '1999-12-31T23:59:59' } }).toHaveIso8601('child.grandchild');
});
