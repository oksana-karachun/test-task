import { Dispatch } from 'redux';

import { useAppDispatch } from 'app/hooks/dispatch';

type FunctionsType = Record<string, (dispatch: Dispatch) => any>;

export const useBehavior = (functions: FunctionsType) => {
  const dispatch = useAppDispatch();
  return Object.entries(functions).reduce<Record<string, any>>(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value(dispatch),
    }),
    {},
  );
};
