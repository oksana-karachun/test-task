import { configureStore } from '@reduxjs/toolkit';

import reducers from './rootReducer';

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export default store;
