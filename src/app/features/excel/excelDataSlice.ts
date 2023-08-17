import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ExcelState {
  value: any;
}

const initialState: ExcelState = {
  value: [],
};

export const ExcelSlice = createSlice({
  name: "excel",
  initialState,
  reducers: {
    addDataFromExcel: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addDataFromExcel } = ExcelSlice.actions;
export default ExcelSlice.reducer;
