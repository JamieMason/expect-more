# expect(value: any).toBeCalculable()

Assert subject can be used in Mathemetic calculations despite not being a `Number`, for example `"1" * "2" === 2`
whereas `"wut?" * 2 === NaN`.

## Examples

```js
expect(ageField.value).toBeCalculable();
```

```js
expect(ageField.value).toEqual(expect.toBeCalculable());
```

```js
expect(team).toEqual(
  expect.objectContaining({
    ageField: expect.toBeCalculable()
  })
);
```

```js
expect(onSubmit).toHaveBeenCalledWith(
  expect.objectContaining({
    ageField: expect.toBeCalculable()
  })
);
```
