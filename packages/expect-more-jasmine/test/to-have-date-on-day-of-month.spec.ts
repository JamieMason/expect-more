import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDateOnDayOfMonth()', () => {
  expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateOnDayOfMonth(
    'child.grandchild',
    29,
  );
});
