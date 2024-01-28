/* Buttons left and right */
export function nextImg(state, max, setState, setLoading) {
  setLoading(true);
  setTimeout(() => {
    state >= max ? setState(state = 0) : setState(state + 1);
    setLoading(false);
  }, 300); 

}
export function prevImg(state, max, setState) {
  setLoading(true); 
  setTimeout(() => {
    state >= 1 ? setState(state - 1) : setState(max);
    setLoading(false); 
  }, 300);
}
/* ---------------------- */

/* Operations CartShop */
//increase quantity and update price
export function handleIncreaseQuantity(product, reducers, dispatch){ 
  dispatch(reducers.increaseQuantity(product))
  dispatch(reducers.addTotalPrice(product.price))
}
//decrease quantity, update price..
export function handleDecreaseQuantity(product, reducers, dispatch){
  if(product.quantity === 1){
    dispatch(reducers.removeProduct(product._id, product.price))
    dispatch((reducers.subtractTotalPrice(product.price)))
  }else{
    dispatch(reducers.decreaseQuantity(product._id))
    dispatch((reducers.subtractTotalPrice(product.price)))
  }
}
//total price formated
export function totalPriceFormated(price){
  var result = price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  result === 0.00 ? '00.00': null
  return result
}
//delete product
export function deleteSelectedProduct(product, reducers, dispatch){
  dispatch(reducers.removeTotalProduct(product))
}
//add product
export function addProductToCart(product, reducers, dispatch){
  dispatch(reducers.addProduct(product));
  dispatch(reducers.addTotalPrice(product.price));
};

// form validations
export const isEmailValid = (email) => {
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  return emailRegex.test(email);
};

export const doPasswordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};

/* ------------------- */

export const urlFetch = 'http://localhost:4000/'