import 'jasmine';
import 'expect-more-jasmine';

// eval is workaround for typescript converting generator fns

it('provides expect().toBeGeneratorFunction()', () => {
  expect(eval('(function*() {yield 2;})')).toBeGeneratorFunction();
});
