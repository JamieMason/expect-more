import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveDateBetween()', () => {
  expect({ child: { grandchild: new Date('2019-12-11') } }).toHaveDateBetween(
    'child.grandchild',
    new Date('2019-12-10'),
    new Date('2019-12-12'),
  );
});
