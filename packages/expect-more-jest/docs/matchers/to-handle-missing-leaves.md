# expect(fn).toHandleMissingLeaves(shape: object | any[])

When given a JSON-serialisable data structure, invokes your function multiple for each copy of `shape` where a single
nested leaf value has been removed. It is intended to assert that a function is resilient against incomplete or invalid
data received from external sources.

## Example

```js
expect(selectVenueNames).toHandleMissingLeaves(upcomingEvents);
```

See the [spec for gen.missingLeaves][missing-leaves] for detail on how values are deconstructed.

[missing-leaves]:
  https://github.com/JamieMason/expect-more/blob/master/packages/expect-more-jest/test/gen/missing-leaves.spec.ts
