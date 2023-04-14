import { Dispatch } from 'redux';

import { setProblems } from 'entities/questionnaire/model';

export const setUserProblems = (dispatch: Dispatch) => (data: string) => {
  dispatch(setProblems(data));
};

export const problemsBehaviors = {
  setUserProblems,
};
