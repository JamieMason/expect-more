import { isWalkable } from 'expect-more';

export const getIn = (path: (string | number)[], origin: Record<any, any> | any[]) =>
  path.reduce((parent, child) => (isWalkable(parent) ? parent[child] : undefined), origin);
