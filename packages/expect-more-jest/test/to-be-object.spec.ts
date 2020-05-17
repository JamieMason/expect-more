import 'expect-more-jest';

it('provides expect().toBeObject()', () => {
  expect({}).toBeObject();
});

it('provides expect().not.toBeObject()', () => {
  expect(() => expect({}).not.toBeObject()).toThrow();
});

it('provides expect.toBeObject()', () => {
  expect({}).toEqual(expect.toBeObject());
});
