# expect.calculable()

Assert subject can be used in Mathemetic calculations despite not being a `Number`, for example `"1" * "2" === 2`
whereas `"wut?" * 2 === NaN`.

## Examples

```js
expect(ageField.value).toEqual(expect.calculable());
```

```js
expect(team).toEqual(
  expect.objectContaining({
    ageField: expect.calculable()
  })
);
```

```js
expect(onSubmit).toHaveBeenCalledWith(
  expect.objectContaining({
    ageField: expect.calculable()
  })
);
```
