import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: {}
}

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setUserLogged : (state, action) =>{
      state.userAuth = {...action.payload}
    },
    unsetUserLogged: (state) =>{
      state.userAuth = {}
    }
  }
})

export const { setUserLogged, unsetUserLogged } = userAuthSlice.actions;
export default userAuthSlice.reducer;