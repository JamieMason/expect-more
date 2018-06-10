# expect(value: any).toBeArrayOfNumbers()

Asserts that a value is an `Array` containing only `Number` values.

## Examples

```js
expect(player.highScores).toBeArrayOfNumbers();
```

```js
expect(player.highScores).toEqual(expect.toBeArrayOfNumbers());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    highScores: expect.toBeArrayOfNumbers()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    highScores: expect.toBeArrayOfNumbers()
  })
);
```
