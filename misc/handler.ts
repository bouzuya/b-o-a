// handler boilerplate

import { O, A, Handler } from 'boa-core';

const tActionTypeDefault = 'action1';
const uActionTypeDefault = 'action2';

type X = number;
type T = { name: string; params: X; }; // A<T> input
type U = string; // A<U> output
type F = (params: X) => U;

type XXXOptions = {
  fs: { [name: string]: F; };
  tActionType?: string;
  uActionType?: string;
};

export interface XXXResponse {
  handler: Handler;
}

const init = (options: XXXOptions): XXXResponse => {
  const { fs, tActionType, uActionType } = options;
  const typeT = tActionType ? tActionType : tActionTypeDefault;
  const typeU = uActionType ? uActionType : uActionTypeDefault;

  const dispatch = (action$: O<A<T>>): O<A<U>> => {
    return action$
      .map(({ data }) => fs[data.name](data.params))
      .map(data => ({ type: typeU, data }));
  };

  const handler = (action$: O<A<any>>, options: any): O<A<any>> => {
    const is = (action: A<any>): boolean => action.type === typeT;
    const other$: O<A<any>> = action$
      .filter(action => !is(action));
    const target$: O<A<T>> = action$
      .filter(is);
    const result$: O<A<U>> = dispatch(target$)
      .filter(a => !!a)
      .share();
    return O.merge(result$, other$);
  };

  return { handler };
};

export { init };

