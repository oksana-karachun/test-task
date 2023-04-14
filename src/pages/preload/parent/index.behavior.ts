import { Dispatch } from 'redux';

import { setParent } from 'entities/questionnaire/model';

export const setFamilyInfo = (dispatch: Dispatch) => (data: boolean) => {
  dispatch(setParent(data));
};

export const parentBehaviors = {
  setFamilyInfo,
};
