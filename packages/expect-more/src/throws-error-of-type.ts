import { curry } from './lib/curry';
import { VoidFn } from './typings';

export const throwsErrorOfType = curry<string, VoidFn, boolean>((type: string, value: VoidFn) => {
  try {
    value();
    return false;
  } catch (err) {
    return err.name === type;
  }
});
