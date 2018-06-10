# expect(value: any).toBeArrayOfStrings()

Asserts that a value is an `Array` containing only `String` values.

## Examples

```js
expect(player.messages).toBeArrayOfStrings();
```

```js
expect(player.messages).toEqual(expect.toBeArrayOfStrings());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    messages: expect.toBeArrayOfStrings()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    messages: expect.toBeArrayOfStrings()
  })
);
```
