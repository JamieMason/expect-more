# expect(value: any).toBeArrayOfBooleans()

Asserts that a value is an `Array` containing only `Boolean` values.

## Examples

```js
expect(player.attempts).toBeArrayOfBooleans();
```

```js
expect(player.attempts).toEqual(expect.toBeArrayOfBooleans());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    attempts: expect.toBeArrayOfBooleans()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    attempts: expect.toBeArrayOfBooleans()
  })
);
```
