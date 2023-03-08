import { combineReducers, configureStore } from "@reduxjs/toolkit";
import filterReducer from "./Filters/slice";
import basketReducer from "./Cart/slice";
import sushiReducer from "./Sushi/slice";
import { useDispatch } from "react-redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, PERSIST } from "redux-persist";

const rootReducer = combineReducers({
  filterReducer,
  basketReducer,
  sushiReducer,
});

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["basketReducer"],
};

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const persistor = persistStore(store);
