# expect(value: any).toBeNonEmptyString()

Asserts that a value is a valid `String` containing at least one character.

## Examples

```js
expect(passwordField.value).toBeNonEmptyString();
```

```js
expect(player.name).toEqual(expect.toBeNonEmptyString());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    name: expect.toBeNonEmptyString()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    name: expect.toBeNonEmptyString()
  })
);
```
