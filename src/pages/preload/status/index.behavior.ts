import { Dispatch } from 'redux';

import { setStatus } from 'entities/questionnaire/model';

export const setUserStatus = (dispatch: Dispatch) => (data: string) => {
  dispatch(setStatus(data));
};

export const statusBehaviors = {
  setUserStatus,
};
