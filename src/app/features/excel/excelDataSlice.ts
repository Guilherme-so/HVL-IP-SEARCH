import { createSlice } from "@reduxjs/toolkit";

export interface ExcelState {
  value: any;
  searchList: [];
}

const initialState: ExcelState = {
  value: [],
  searchList: [],
};

export const ExcelSlice = createSlice({
  name: "excel",
  initialState,
  reducers: {
    addDataFromExcel: (state, action) => {
      state.value = action.payload;
    },
    searchExcel: (state, action) => {
      state.searchList = action.payload;
    },
  },
});

export const { addDataFromExcel, searchExcel } = ExcelSlice.actions;
export default ExcelSlice.reducer;
