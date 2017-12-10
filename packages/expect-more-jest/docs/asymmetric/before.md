# expect.before(other: date)

Asserts that a value is a valid instance of `Date` whose value occurs before that of `other` Date.

## Examples

```js
expect(game.releaseDate).toEqual(expect.before(new Date('1990-10-15')));
```

```js
expect(game).toEqual(
  expect.objectContaining({
    releaseDate: expect.before(new Date('1990-10-15'))
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    releaseDate: expect.before(new Date('1990-10-15'))
  })
);
```
