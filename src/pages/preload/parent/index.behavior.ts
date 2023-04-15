import { Dispatch } from 'redux';

import { setParent, setSingleParent } from 'entities/questionnaire/model';

export const setParentInfo = (dispatch: Dispatch) => (data: boolean) => {
  dispatch(setParent(data));
};

export const setSingleParentInfo = (dispatch: Dispatch) => (data: boolean) => {
  dispatch(setSingleParent(data));
};

export const parentBehaviors = {
  setParentInfo,
  setSingleParentInfo,
};
