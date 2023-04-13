import { Dispatch } from 'redux';

import { setDecisions } from 'entities/QuestionCard/model/index.reducer';
import { Decisions } from 'shared/api/types';

export const setUserDecisions = (dispatch: Dispatch) => (data: Decisions) => {
  dispatch(setDecisions(data));
};

export const decisionsBehaviors = {
  setUserDecisions,
};
