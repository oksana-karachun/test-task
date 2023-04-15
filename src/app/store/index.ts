import { configureStore } from '@reduxjs/toolkit';

import reducers from './rootReducer';

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
