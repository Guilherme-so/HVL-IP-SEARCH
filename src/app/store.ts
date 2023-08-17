import { configureStore } from "@reduxjs/toolkit";
import ExcelReducer from "./features/excel/excelDataSlice";

export const store = configureStore({
  reducer: {
    excel: ExcelReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
