# expect.sameLengthAs(other: string)

Asserts that a value is a `String` whose length is the same as `other` string.

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
