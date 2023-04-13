import { Dispatch } from 'redux';

import { setStatus } from 'entities/QuestionCard/model/index.reducer';

export const setUserStatus = (dispatch: Dispatch) => (data: string) => {
  dispatch(setStatus(data));
};

export const statusBehaviors = {
  setUserStatus,
};
