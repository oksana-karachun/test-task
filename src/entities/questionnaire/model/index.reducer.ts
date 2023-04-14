import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Birth } from 'shared/api/types';

export interface DataState {
  gender: string;
  birth: Birth;
  status: string;
  problems: string;
  parent: boolean;
  singleParent: boolean;
  decisions: string;
  email: string;
}

const initialState: DataState = {
  gender: '',
  birth: {
    month: '',
    day: '',
    year: '',
  },
  status: '',
  problems: '',
  parent: false,
  singleParent: false,
  decisions: '',
  email: '',
};

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
    },
    setBirth(state, action: PayloadAction<Birth>) {
      state.birth = action.payload;
    },
    setStatus(state, action: PayloadAction<string>) {
      state.status = action.payload;
    },
    setParent(state, action: PayloadAction<boolean>) {
      state.parent = action.payload;
    },
    setProblems(state, action: PayloadAction<string>) {
      state.problems = action.payload;
    },
    setDecisions(state, action: PayloadAction<string>) {
      state.decisions = action.payload;
    },
    setEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

export const {
  setGender,
  setBirth,
  setStatus,
  setParent,
  setProblems,
  setDecisions,
  setEmail,
} = data.actions;

export default data.reducer;
