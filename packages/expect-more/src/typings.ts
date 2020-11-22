export type Collection = any[] | Record<any, any>;
export type VoidFn = () => void;
export type UnaryBoolFn = (value: any) => boolean;
export type Reducer = (memo: any, value: any, key: number | string, collection: Collection) => any;
