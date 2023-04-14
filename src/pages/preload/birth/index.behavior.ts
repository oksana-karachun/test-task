import { Dispatch } from 'redux';

import { setBirth } from 'entities/questionnaire/model';
import { Birth } from 'shared/api/types';

export const setUserBirth = (dispatch: Dispatch) => (data: Birth) => {
  dispatch(setBirth(data));
};

export const birthBehaviors = {
  setUserBirth,
};
