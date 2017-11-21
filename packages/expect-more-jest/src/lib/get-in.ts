import { isWalkable } from 'expect-more';
import { Collection, Locator } from '../typings';

const getChild = (parent: any, child: Locator): any => (isWalkable(parent) ? parent[child] : undefined);
export const getIn = (path: Locator[], origin: Collection): any => path.reduce(getChild, origin);
