import 'expect-more-jasmine';
import 'jasmine';

// eval is workaround for typescript converting generator fns

it('provides expect().toHaveGeneratorFunction()', () => {
  expect({ child: { grandchild: eval('(function*() {yield 2;})') } }).toHaveGeneratorFunction(
    'child.grandchild',
  );
});
