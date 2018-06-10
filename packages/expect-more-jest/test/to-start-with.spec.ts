it('provides toStartWith', () => {
  expect('jamie').toStartWith('jam');
  expect(() => {
    expect('wut?').toStartWith('nah!');
  }).toThrow();
  expect(() => {
    expect('jamie').not.toStartWith('jamie');
  }).toThrow();
});

it('provides expect.toBeStartingWith', () => {
  expect('jamie').toEqual(expect.toStartWith('jam'));
});
