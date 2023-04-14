import { createSelector } from '@reduxjs/toolkit';
import { createStructuredSelector } from 'reselect';

import { RootState } from 'app/store';
import { getZodiacSign } from 'shared/helpers';

const zodiacSelector = createSelector(
  (state: RootState) => state.dataReducer.birth.day,
  (state: RootState) => state.dataReducer.birth.month,
  (day, month) => {
    return getZodiacSign(month, day);
  },
);

const userDecisionSelector = createSelector(
  (state: RootState) => state.dataReducer.decisions,
  (decision) => decision,
);

export const relationshipInfoSelector = createStructuredSelector({
  zodiac: zodiacSelector,
  userDecision: userDecisionSelector,
});
