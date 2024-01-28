import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productSlice";
import menuReducer from './reducers/menuSlice';
import cartshopReducer from "./reducers/cartshopSlice";
import favoriteReducer from './reducers/favoriteSlice';
import userAuthReducer from "./reducers/userAuthSlice";
import langReducer from './reducers/langSlice';

export default configureStore({
  reducer: {
    productInfo : productReducer,
    menu : menuReducer, 
    cartShop : cartshopReducer,
    favorite : favoriteReducer,
    userAuth: userAuthReducer,
    lang: langReducer,
  },
})