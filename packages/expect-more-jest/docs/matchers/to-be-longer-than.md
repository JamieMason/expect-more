# expect(value: any).toBeLongerThan(other: string | any[])

Asserts that a value is a `String` or `Array` whose length is greater than `other`.

## Examples

```js
expect(appendedFile.contents).toBeLongerThan(file.contents);
```

```js
expect(appendedFile.contents).toEqual(expect.toBeLongerThan(file.contents));
```

```js
expect(appendedFile).toEqual(
  expect.objectContaining({
    contents: expect.toBeLongerThan(file.contents)
  })
);
```

```js
expect(onPress).toHaveBeenCalledWith(
  expect.objectContaining({
    contents: expect.toBeLongerThan(file.contents)
  })
);
```
