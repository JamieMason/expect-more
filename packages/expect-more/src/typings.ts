export type Collection = any[] | object;
export type VoidFn = () => void;
export type UnaryBoolFn = (value: any) => boolean;
export type Reducer = (memo: any, value: any, key: number | string, collection: Collection) => any;
