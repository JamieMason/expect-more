import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveDateBefore()', () => {
  expect({ child: { grandchild: new Date('2019-12-31') } }).toHaveDateBefore(
    'child.grandchild',
    new Date('2020-01-01'),
  );
});
