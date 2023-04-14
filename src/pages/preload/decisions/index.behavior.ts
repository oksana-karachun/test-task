import { Dispatch } from 'redux';

import { setDecisions } from 'entities/questionnaire/model';
import { Decisions } from 'shared/api/types';

export const setUserDecisions = (dispatch: Dispatch) => (data: Decisions) => {
  dispatch(setDecisions(data));
};

export const decisionsBehaviors = {
  setUserDecisions,
};
