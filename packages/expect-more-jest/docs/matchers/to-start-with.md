# expect(value: any).toStartWith(other: string)

Asserts that a value is a `String` whose leading characters are `other` string.

## Examples

```js
expect(location.postcode).toStartWith('LS1');
```

```js
expect(location.postcode).toEqual(expect.toStartWith('LS1'));
```

```js
expect(location).toEqual(
  expect.objectContaining({
    postcode: expect.toStartWith('LS1')
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    postcode: expect.toStartWith('LS1')
  })
);
```
