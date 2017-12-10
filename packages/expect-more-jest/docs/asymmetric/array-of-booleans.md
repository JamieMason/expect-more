# expect.arrayOfBooleans()

Asserts that a value is an `Array` containing only `Boolean` values.

## Examples

```js
expect(player.attempts).toEqual(expect.arrayOfBooleans());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    attempts: expect.arrayOfBooleans()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    attempts: expect.arrayOfBooleans()
  })
);
```
