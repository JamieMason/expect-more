# expect.nonEmptyString()

Asserts that a value is a `String` containing at least 1 character.

## Examples

```js
expect(player.name).toEqual(expect.nonEmptyString());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    name: expect.nonEmptyString()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    name: expect.nonEmptyString()
  })
);
```
