# expect.endingWith(other: string)

Asserts that a value is a `String` whose trailing characters are `other` string.

## Examples

```js
expect(tvChannel.name).toEqual(expect.endingWith(' HD'));
```

```js
expect(tvChannel).toEqual(
  expect.objectContaining({
    name: expect.endingWith(' HD')
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    name: expect.endingWith(' HD')
  })
);
```
