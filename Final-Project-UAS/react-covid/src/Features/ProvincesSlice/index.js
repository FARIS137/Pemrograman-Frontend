// ProvincesSlice.js
import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/provinces";

const provincesSlice = createSlice({
  name: "provinces",
  initialState: {
    provinces: [],
    provinceslocal: data,
  },
  reducers: {
    addProvince(state, action) {
      state.provinces = action.payload;
    },
    updateProvinces(state, action) {
      state.provinces = action.payload;
    },
  },
});

export const { addProvince, updateProvinces } = provincesSlice.actions;
export default provincesSlice.reducer;
