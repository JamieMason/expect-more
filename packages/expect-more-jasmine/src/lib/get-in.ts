import { isWalkable } from 'expect-more';

export const getIn = (path: (string | number)[], origin: object | any[]) =>
  path.reduce((parent, child) => (isWalkable(parent) ? parent[child] : undefined), origin);
