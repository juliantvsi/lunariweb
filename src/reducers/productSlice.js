import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product : {},
  isActive: false,
  order: null,
  search: {
    isActive: false,
    value: '',
  }
} 

export const productSlice = createSlice(({
  name: "productDetail",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = {...action.payload }
    },
    unsetProduct: (state) =>{
      state.product = {}
    },
    setActive: (state, action)=>{
      state.isActive = action.payload
    },
    setOrder: (state, action)=>{
      state.order = action.payload
    },
    setSearch: (state, action)=>{
      state.search.value = action.payload
    },
    clearSearch: (state)=>{
      state.search.value = ''
      state.search.isActive = false
    },
    handleSearch:(state, action)=>{
      state.search.isActive = action.payload
    }
  }
}))

export const { setProduct, unsetProduct, setActive, setOrder, setSearch, handleSearch, clearSearch } = productSlice.actions;
export default productSlice.reducer;