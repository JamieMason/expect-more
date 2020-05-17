import 'expect-more-jest';
// eval is workaround for typescript converting generator fns

it('provides expect().toBeGeneratorFunction()', () => {
  expect(eval('(function*() {yield 2;})')).toBeGeneratorFunction();
});

it('provides expect().not.toBeGeneratorFunction()', () => {
  expect(() => expect(eval('(function*() {yield 2;})')).not.toBeGeneratorFunction()).toThrow();
});

it('provides expect.toBeGeneratorFunction()', () => {
  expect(eval('(function*() {yield 2;})')).toEqual(expect.toBeGeneratorFunction());
});
