import { Dispatch } from 'redux';

import { setProblems } from 'entities/QuestionCard/model/index.reducer';

export const setUserProblems = (dispatch: Dispatch) => (data: string) => {
  dispatch(setProblems(data));
};

export const problemsBehaviors = {
  setUserProblems,
};
