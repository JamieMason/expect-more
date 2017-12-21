# expect.calculable()

Assert subject can be used in Mathemetic calculations despite not being a `Number`, for example
`Number.isNaN("1" * "2") === false` whereas `Number.isNaN("wut?" * 2) === true`.

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
