/* tslint:disable */

// ↓↓ eval is workaround for typescript converting async to non-async ↓↓
const asyncFn = eval('(async (_) => _)');

it('provides toBeAsyncFunction', () => {
  expect(asyncFn).toBeAsyncFunction();
  expect(() => {
    expect(null).toBeAsyncFunction();
  }).toThrow();
  expect(() => {
    expect(asyncFn).not.toBeAsyncFunction();
  }).toThrow();
});

it('provides expect.toBeAsyncFunction', () => {
  expect(asyncFn).toEqual(expect.toBeAsyncFunction());
});
