# expect(fn).toHandleNullLeaves(shape: object | any[])

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested leaf value has been set to null. It is intended to assert that a function is resilient against incomplete or
invalid data received from external sources.

## Example

```js
expect(selectVenueNames).toHandleNullLeaves(upcomingEvents);
```

See the [spec for gen.nullLeaves][null-leaves] for detail on how values are deconstructed.

[null-leaves]: https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/null-leaves.spec.ts
