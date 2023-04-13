import { Dispatch } from 'redux';

import { setGender } from 'entities/QuestionCard/model/index.reducer';
import { Gender } from 'shared/api/types';

export const setUserGender = (dispatch: Dispatch) => (data: Gender) => {
  dispatch(setGender(data));
};

export const genderBehaviors = {
  setUserGender,
};
