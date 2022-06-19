import {configureStore} from "@reduxjs/toolkit";
import tokenQueueReducer from "./reducers/tokenQueueReducer";

export const store = configureStore({
  reducer: {
    tokenQueue: tokenQueueReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch