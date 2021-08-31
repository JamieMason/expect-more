import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveDateOnOrBefore()', () => {
  expect({ child: { grandchild: new Date('2019-12-15') } }).toHaveDateOnOrBefore(
    'child.grandchild',
    new Date('2019-12-31'),
  );
});
