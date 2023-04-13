import { RootState } from 'app/store';
import { createSelector } from '@reduxjs/toolkit';
import { calculateAge } from 'shared/helpers';

export const dataSelector = createSelector(
  (state: RootState) => state.dataReducer,
  (data) => ({
    gender: data.gender,
    age: calculateAge({
      month: data.birth.month,
      day: data.birth.day,
      year: data.birth.year,
    }),
    children: data.parent,
  }),
);
