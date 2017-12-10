# expect.wholeNumber()

Asserts that a value is a `Number` with no positive decimal places.

## Examples

```js
expect(player.livesRemaining).toEqual(expect.wholeNumber());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    livesRemaining: expect.wholeNumber()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    livesRemaining: expect.wholeNumber()
  })
);
```
