import 'expect-more-jasmine';
import 'jasmine';

it('provides expect().toHaveArrayOfBooleans()', () => {
  expect({ child: { grandchild: [true, false, new Boolean(true)] } }).toHaveArrayOfBooleans(
    'child.grandchild',
  );
});
