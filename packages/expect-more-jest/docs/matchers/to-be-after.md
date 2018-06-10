# expect(date: Date).toBeAfter(other: Date)

Asserts that a value is a valid instance of `Date` whose value occurs after that of `other` Date.

## Examples

```js
expect(game.releaseDate).toBeAfter(new Date('1990-10-15'));
```

```js
expect(game.releaseDate).toEqual(expect.toBeAfter(new Date('1990-10-15')));
```

```js
expect(game).toEqual(
  expect.objectContaining({
    releaseDate: expect.toBeAfter(new Date('1990-10-15'))
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    releaseDate: expect.toBeAfter(new Date('1990-10-15'))
  })
);
```
