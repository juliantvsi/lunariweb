import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: [],
} 

export const favSlice = createSlice(({
  name: "favorite",
  initialState,
  reducers: {
    addProductToFav: (state, action)=>{
      state.favoriteList = [...state.favoriteList, action.payload]
    },
    removeProductToFav: (state, action) =>{
      state.favoriteList = state.favoriteList.filter((product)=>product._id !== action.payload)
    }
  }
}))

export const { addProductToFav,removeProductToFav } = favSlice.actions;
export default favSlice.reducer;