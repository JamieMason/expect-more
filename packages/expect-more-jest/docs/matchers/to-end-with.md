# expect(value: any).toEndWith(other: string)

Asserts that a value is a `String` whose trailing characters are `other` string.

## Examples

```js
expect(tvChannel.name).toEndWith(' HD');
```

```js
expect(tvChannel.name).toEqual(expect.toEndWith(' HD'));
```

```js
expect(tvChannel).toEqual(
  expect.objectContaining({
    name: expect.toEndWith(' HD')
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    name: expect.toEndWith(' HD')
  })
);
```
