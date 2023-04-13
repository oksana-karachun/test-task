import { Dispatch } from 'redux';

import { setBirth } from 'entities/QuestionCard/model/index.reducer';

export const setUserBirth = (dispatch: Dispatch) => (data: Date) => {
  dispatch(setBirth(data));
};

export const birthBehaviors = {
  setUserBirth,
};
