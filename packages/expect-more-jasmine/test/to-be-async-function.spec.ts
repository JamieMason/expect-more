import 'jasmine';
import 'expect-more-jasmine';

// eval is workaround for typescript converting async to non-async

it('provides expect().toBeAsyncFunction()', () => {
  expect(eval('(async (_) => _)')).toBeAsyncFunction();
});
