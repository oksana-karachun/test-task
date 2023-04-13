import { Dispatch } from 'redux';

import { setParent } from 'entities/QuestionCard/model/index.reducer';

export const setFamilyInfo = (dispatch: Dispatch) => (data: boolean) => {
  dispatch(setParent(data));
};

export const parentBehaviors = {
  setFamilyInfo,
};
