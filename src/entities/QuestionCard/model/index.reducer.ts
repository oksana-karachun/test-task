import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  gender: string;
  birth: Date | null;
  status: string;
  problems: string;
  parent: boolean;
  singleParent: boolean;
  decisions: string;
}

const initialState: DataState = {
  gender: '',
  birth: null,
  status: '',
  problems: '',
  parent: false,
  singleParent: false,
  decisions: '',
};

const data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setGender(state, action: PayloadAction<string>) {
      state.gender = action.payload;
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
  },
});

export const { setGender, setStatus, setParent, setProblems, setDecisions } =
  data.actions;

export default data.reducer;
