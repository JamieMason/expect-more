import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDateOnDayOfWeek()', () => {
  expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateOnDayOfWeek(
    'child.grandchild',
    0,
  );
});
