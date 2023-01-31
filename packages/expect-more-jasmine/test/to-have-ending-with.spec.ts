import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveEndingWith()', () => {
  expect({ child: { grandchild: 'JavaScript' } }).toHaveEndingWith('child.grandchild', 'Script');
});
