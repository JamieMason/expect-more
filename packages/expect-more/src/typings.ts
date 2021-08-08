export type AnyFn = (...args: any[]) => any;
export type Collection = any[] | Record<any, any>;
export type Reducer = (memo: any, value: any, key: number | string, collection: Collection) => any;
export type UnaryBoolFn = (value: any) => boolean;
export type VoidFn = () => void;
