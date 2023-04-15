import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { Birth } from 'shared/api/types';

import {
  setBirth,
  setDecisions,
  setEmail,
  setGender,
  setParent,
  setProblems,
  setSingleParent,
  setStatus,
} from './index.actions';

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

const data = createReducer(initialState, {
  [setGender.type](state, action: PayloadAction<string>) {
    state.gender = action.payload;
  },
  [setBirth.type](state, action: PayloadAction<Birth>) {
    state.birth = action.payload;
  },
  [setStatus.type](state, action: PayloadAction<string>) {
    state.status = action.payload;
  },
  [setParent.type](state, action: PayloadAction<boolean>) {
    state.parent = action.payload;
  },
  [setSingleParent.type](state, action: PayloadAction<boolean>) {
    state.singleParent = action.payload;
  },
  [setProblems.type](state, action: PayloadAction<string>) {
    state.problems = action.payload;
  },
  [setDecisions.type](state, action: PayloadAction<string>) {
    state.decisions = action.payload;
  },
  [setEmail.type](state, action: PayloadAction<string>) {
    state.email = action.payload;
  },
});

export default data;
