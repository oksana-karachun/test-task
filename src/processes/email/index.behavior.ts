import { Dispatch } from 'redux';

import { setEmail } from 'entities/questionnaire/model';

export const setUserEmail = (dispatch: Dispatch) => (data: string) => {
  dispatch(setEmail(data));
};

export const emailBehaviors = {
  setUserEmail,
};
