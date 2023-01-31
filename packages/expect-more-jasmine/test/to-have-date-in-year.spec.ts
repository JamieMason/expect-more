import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveDateInYear()', () => {
  expect({ child: { grandchild: new Date('2021-08-29') } }).toHaveDateInYear(
    'child.grandchild',
    2021,
  );
});
