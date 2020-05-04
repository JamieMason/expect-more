#!/usr/bin/env bash

rm -f ./packages/expect-more-jasmine/src/*.ts
rm -f ./packages/expect-more-jest/src/*.ts
rm -f ./packages/expect-more-jasmine/test/to-*
rm -f ./packages/expect-more-jest/test/to-*
ts-node --project ./scripts/tsconfig.json ./scripts/generate-matchers/index.ts
yarn lint
