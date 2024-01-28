import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuActive : false,
  categorySelected: '',
} 

export const menuSlice = createSlice(({
  name: "menu",
  initialState,
  reducers: {
    setMenuActive: (state, action) => {
      state.menuActive = action.payload
    },
    setCategory: (state, action)=>{
      state.categorySelected = action.payload
    },
  }
}))

export const { setCategory, setMenuActive, setTimer } = menuSlice.actions;
export default menuSlice.reducer;