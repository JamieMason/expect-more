import 'jasmine';
import 'expect-more-jasmine';

it('provides expect().toHaveStartingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toHaveStartingWith('child.grandchild', 'Java');
});
