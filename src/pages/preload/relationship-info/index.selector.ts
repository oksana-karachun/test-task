import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'app/store';
import { getZodiacSign } from 'shared/helpers';

export const getZodiacSelector = createSelector(
  (state: RootState) => state.dataReducer.birth.day,
  (state: RootState) => state.dataReducer.birth.month,
  (day, month) => {
    return getZodiacSign(month, day);
  },
);
