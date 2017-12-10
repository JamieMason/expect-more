# expect.longerThan(other: string)

Asserts that a value is a `String` whose length is greater than `other` string.

## Examples

```js
expect(appendedFile.contents).toEqual(expect.longerThan(file.contents));
```

```js
expect(appendedFile).toEqual(
  expect.objectContaining({
    contents: expect.longerThan(file.contents)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    contents: expect.longerThan(file.contents)
  })
);
```
