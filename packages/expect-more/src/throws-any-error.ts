import { VoidFn } from './typings';

export const throwsAnyError = (value: VoidFn) => {
  try {
    value();
    return false;
  } catch (err) {
    return true;
  }
};
