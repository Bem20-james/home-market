import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import rootReducer from "./rootReducer";
import type { WebStorage } from "redux-persist/es/types";

const storage: WebStorage = {
  getItem: (key: string) =>
    Promise.resolve(window.localStorage.getItem(key)),

  setItem: (key: string, value: string) =>
    Promise.resolve(window.localStorage.setItem(key, value)),

  removeItem: (key: string) =>
    Promise.resolve(window.localStorage.removeItem(key)),
};

const persistConfig = {
  key: "root",
  storage,
  // Only whitelist keys that actually exist in rootReducer. "cart" was
  // listed here previously but there's no cart slice registered below -
  // redux-persist just silently ignores it. Add a cart slice to
  // rootReducer first if you want it persisted, then add it back here.
  whitelist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Export these and use them everywhere instead of typing state/dispatch
// by hand. This is what fixes the "state is implicitly any" errors.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;