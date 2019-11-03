/* tslint:disable */

// ↓↓ eval is workaround for typescript converting generator fns ↓↓
const generatorFn = eval('(function*() {yield 2;})');

it('provides toBeGeneratorFunction', () => {
  expect(generatorFn).toBeGeneratorFunction();
  expect(() => {
    expect(null).toBeGeneratorFunction();
  }).toThrow();
  expect(() => {
    expect(generatorFn).not.toBeGeneratorFunction();
  }).toThrow();
});

it('provides expect.toBeGeneratorFunction', () => {
  expect(generatorFn).toEqual(expect.toBeGeneratorFunction());
});
