import { createAction } from '@reduxjs/toolkit';

import { Birth } from 'shared/api/types';

import dataActionTypes from './index.actionTypes';

export const setGender = createAction<string>(dataActionTypes.SET_GENDER);
export const setBirth = createAction<Birth>(dataActionTypes.SET_BIRTH);
export const setStatus = createAction<string>(dataActionTypes.SET_STATUS);
export const setParent = createAction<boolean>(dataActionTypes.SET_PARENT);
export const setProblems = createAction<string>(dataActionTypes.SET_PROBLEMS);
export const setSingleParent = createAction<boolean>(
  dataActionTypes.SET_SINGLE_PARENT,
);
export const setDecisions = createAction<string>(dataActionTypes.SET_DECISIONS);
export const setEmail = createAction<string>(dataActionTypes.SET_EMAIL);
