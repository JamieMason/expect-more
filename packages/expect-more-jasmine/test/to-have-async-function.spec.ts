import 'jasmine';
import 'expect-more-jasmine';

// eval is workaround for typescript converting async to non-async

it('provides expect().toHaveAsyncFunction()', () => {
  expect({ child: { grandchild: eval('(async (_) => _)') } }).toHaveAsyncFunction(
    'child.grandchild',
  );
});
