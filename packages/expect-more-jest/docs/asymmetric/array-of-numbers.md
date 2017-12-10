# expect.arrayOfNumbers()

Asserts that a value is an `Array` containing only `Number` values.

## Examples

```js
expect(player.highScores).toEqual(expect.arrayOfNumbers());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    highScores: expect.arrayOfNumbers()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    highScores: expect.arrayOfNumbers()
  })
);
```
