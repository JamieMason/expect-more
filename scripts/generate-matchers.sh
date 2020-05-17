#!/usr/bin/env bash

ts-node --project ./scripts/tsconfig.json ./scripts/generate-matchers/index.ts
yarn lint
