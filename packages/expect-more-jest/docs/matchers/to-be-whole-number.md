# expect(value: any).toBeWholeNumber()

Asserts that a value is a `Number` with no positive decimal places.

## Examples

```js
expect(player.livesRemaining).toBeWholeNumber();
```

```js
expect(player.livesRemaining).toEqual(expect.toBeWholeNumber());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    livesRemaining: expect.toBeWholeNumber()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    livesRemaining: expect.toBeWholeNumber()
  })
);
```
