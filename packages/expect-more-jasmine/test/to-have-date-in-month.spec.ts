import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDateInMonth()', () => {
  expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateInMonth(
    'child.grandchild',
    7,
  );
});
