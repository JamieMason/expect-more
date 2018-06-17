import { isWalkable } from 'expect-more';
import { Collection, PropName } from '..';

const getChild = (parent: any, child: PropName): any => (isWalkable(parent) ? parent[child] : undefined);
export const getIn = (path: PropName[], origin: Collection): any => path.reduce(getChild, origin);
