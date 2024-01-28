import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartActive: false,
  cartCount: 0,
  totalCount: 0,
  cartProductList: [],
  totalPrice: 0,
};

export const cartShopSlice = createSlice({
  name: "cartShop",
  initialState,
  reducers: {
    setCartActive: (state, action) => {
      state.cartActive = action.payload;
    },
    addProduct: (state, action) => {
      const productExisting = state.cartProductList.find(
        (product) => product._id === action.payload._id
      );
      if (productExisting) {
        state.cartProductList = state.cartProductList.map((item) => {
          if (item._id === action.payload._id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        state.cartCount += 1;
      } else {
        state.cartProductList = [
          ...state.cartProductList,
          { ...action.payload, quantity: 1 },
        ];
        state.cartCount += 1;
      }
    },
    removeProduct: (state, action) => {
      state.cartProductList = state.cartProductList.filter(
        (product) => product._id !== action.payload
      );
      state.cartCount -= 1;
    },
    addTotalPrice: (state, action) => {
      state.totalPrice += action.payload;
    },
    subtractTotalPrice: (state, action) => {
      state.cartProductList.length < 1
        ? (state.totalPrice = 0)
        : (state.totalPrice -= action.payload);
    },
    increaseQuantity: (state, action) => {
      const productId = action.payload._id;
      const item = state.cartProductList.find((item) => item._id === productId);

      if (item) {
        state.cartCount += 1;
        state.cartProductList = state.cartProductList.map((item) => {
          if (item._id === productId) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const item = state.cartProductList.find((item) => item._id === productId);
      if (item) {
        state.cartCount -= 1;
        state.cartProductList = state.cartProductList.map((item) => {
          if (item._id === productId && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        });
      }
    },
    removeTotalProduct: (state, action) => {
      const { _id, price, quantity } = action.payload;
      const total = price * quantity;

      state.cartProductList = state.cartProductList.filter(
        (product) => product._id !== _id
      );
      state.totalPrice -= total;
      state.cartCount -= quantity;
    },
  },
});

export const {
  setCartActive,
  addProduct,
  removeProduct,
  addTotalPrice,
  subtractTotalPrice,
  increaseQuantity,
  decreaseQuantity,
  removeTotalProduct,
} = cartShopSlice.actions;

export default cartShopSlice.reducer;
