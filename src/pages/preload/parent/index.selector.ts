import { RootState } from 'app/store';

export const familyUserStatusSelector = (state: RootState) =>
  state.dataReducer.status;
