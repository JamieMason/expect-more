# expect.startingWith(other: string)

Asserts that a value is a `String` whose leading characters are `other` string.

## Examples

```js
expect(location.postcode).toEqual(expect.startingWith('LS1'));
```

```js
expect(location).toEqual(
  expect.objectContaining({
    postcode: expect.startingWith('LS1')
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    postcode: expect.startingWith('LS1')
  })
);
```
