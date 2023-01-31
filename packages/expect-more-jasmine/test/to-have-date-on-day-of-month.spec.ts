import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveDateOnDayOfMonth()', () => {
  expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateOnDayOfMonth(
    'child.grandchild',
    29,
  );
});
