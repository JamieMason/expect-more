it('provides toEndWith', () => {
  expect('jamie').toEndWith('mie');
  expect(() => {
    expect('wut?').toEndWith('nah!');
  }).toThrow();
  expect(() => {
    expect('jamie').not.toEndWith('mie');
  }).toThrow();
});

it('provides expect.toEndWith', () => {
  expect('jamie').toEqual(expect.toEndWith('mie'));
});
