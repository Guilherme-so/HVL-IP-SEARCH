import { configureStore } from "@reduxjs/toolkit";
import ExcelReducer from "./features/excel/excelDataSlice";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, ExcelReducer);


export const store = configureStore({
  reducer: {
    excel: persistedReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
