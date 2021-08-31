import { curry1 } from '../../src/lib/curry1';
import { curry2 } from '../../src/lib/curry2';
import { curry3 } from '../../src/lib/curry3';

describe('curry1', () => {
  it('provides currying for unary type guards', () => {
    const spy = jest.fn();
    const fn: any = curry1(spy as any);
    fn();
    expect(spy).not.toHaveBeenCalled();
    fn(1);
    expect(spy).toHaveBeenCalledWith(1);
    fn(2, 3);
    expect(spy).toHaveBeenCalledWith(2);
  });
});

describe('curry2', () => {
  it('provides currying for binary type guards', () => {
    const spy = jest.fn();
    const fn: any = curry2(spy as any);
    fn();
    expect(spy).not.toHaveBeenCalled();
    fn(1);
    expect(spy).not.toHaveBeenCalled();
    fn(1, 2);
    expect(spy).toHaveBeenCalledWith(1, 2);
    fn(3)(4);
    expect(spy).toHaveBeenCalledWith(3, 4);
    fn(5, 6, 7);
    expect(spy).toHaveBeenCalledWith(5, 6);
  });
});

describe('curry3', () => {
  it('provides currying for ternary type guards', () => {
    const spy = jest.fn();
    const fn: any = curry3(spy as any);
    fn();
    expect(spy).not.toHaveBeenCalled();
    fn(1);
    expect(spy).not.toHaveBeenCalled();
    fn(1, 2);
    expect(spy).not.toHaveBeenCalled();
    fn(1, 2, 3);
    expect(spy).toHaveBeenCalledWith(1, 2, 3);
    fn(4)(5)(6);
    expect(spy).toHaveBeenCalledWith(4, 5, 6);
    fn(7, 8, 9, 10);
    expect(spy).toHaveBeenCalledWith(7, 8, 9);
  });
});
