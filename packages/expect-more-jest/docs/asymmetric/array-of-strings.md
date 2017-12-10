# expect.arrayOfStrings()

Asserts that a value is an `Array` containing only `String` values.

## Examples

```js
expect(player.messages).toEqual(expect.arrayOfStrings());
```

```js
expect(player).toEqual(
  expect.objectContaining({
    messages: expect.arrayOfStrings()
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    messages: expect.arrayOfStrings()
  })
);
```
