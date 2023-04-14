import { Dispatch } from 'redux';

import { setEmail } from 'entities/QuestionCard/model/index.reducer';

export const setUserEmail = (dispatch: Dispatch) => (data: string) => {
  dispatch(setEmail(data));
};

export const emailBehaviors = {
  setUserEmail,
};
