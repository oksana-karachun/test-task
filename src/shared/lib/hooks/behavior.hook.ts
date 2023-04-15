import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

type FunctionsType = Record<string, (dispatch: Dispatch) => any>;

export const useBehavior = (functions: FunctionsType) => {
  const dispatch = useDispatch();
  return Object.entries(functions).reduce<Record<string, any>>(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value(dispatch),
    }),
    {},
  );
};
