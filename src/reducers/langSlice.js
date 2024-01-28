import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentLanguage: 'ES'
} 

export const langSlice = createSlice(({
  name: "lang",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.currentLanguage = action.payload
    },
  }
}))

export const { changeLanguage } = langSlice.actions;
export default langSlice.reducer;