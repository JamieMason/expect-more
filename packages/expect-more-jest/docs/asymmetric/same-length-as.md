# expect.sameLengthAs(other: string | any[])

Asserts that a value is a `String` or `Array` whose length is the same as `other`.

## Examples

```js
expect(passwordField.value).toEqual(expect.sameLengthAs(requirements.passwordLength));
```

```js
expect(passwordField).toEqual(
  expect.objectContaining({
    value: expect.sameLengthAs(requirements.passwordLength)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    value: expect.sameLengthAs(requirements.passwordLength)
  })
);
```
