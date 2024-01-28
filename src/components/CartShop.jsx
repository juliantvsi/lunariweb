/* Styles */
import { VerticalMenuContainer } from "../styles/shared-styles";
import { CartShopContainer, MessageCartEmpty, ProductInfoContainer, InfoContainer, TotalPrice, ProductImg, ProductInfo, Count, Icons } from '../styles/CartShop';
/* State */
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, subtractTotalPrice, increaseQuantity, decreaseQuantity, addTotalPrice, removeTotalProduct } from "../reducers/cartshopSlice"
/* Components, functions, and react-redux */
import { Button, Icon } from "../components";
import { Link } from "react-router-dom";
import { handleIncreaseQuantity, handleDecreaseQuantity, totalPriceFormated, deleteSelectedProduct } from '../shared-functions';
/* -------------------------------------- */

export default function CartShop(){
  let { cartProductList, totalPrice } = useSelector(state => state.cartShop);
  const dispatch = useDispatch();
  const reducers = { removeProduct, subtractTotalPrice, increaseQuantity, decreaseQuantity, addTotalPrice, removeTotalProduct }

  return(
    <CartShopContainer>
      <VerticalMenuContainer backgroundColor='#fff' >
        {cartProductList.length < 1 ? <MessageCartEmpty>Your cart is empty.</MessageCartEmpty> : cartProductList.map((product, id)=> {
          return(
            <ProductInfoContainer key={id} >
              <ProductImg src={product.images[0]} alt={product.title} />
              <InfoContainer >
                <ProductInfo>
                  {product.title}
                </ProductInfo>
                <ProductInfo>
                  {`$${totalPriceFormated(product.price)}`}
                </ProductInfo>
              </InfoContainer>

              <Icons >
                <Count value={`x${product.quantity}`} readOnly />
                <div>
                  <Icon name='plus' functionClick={()=>handleIncreaseQuantity(product, reducers, dispatch)} />
                  <Icon name='dash' functionClick={()=>handleDecreaseQuantity(product, reducers, dispatch)} />
                </div>
                <Icon name='trash' functionClick={()=>deleteSelectedProduct(product, reducers, dispatch)} />
              </Icons>
            </ProductInfoContainer>  
        )})}
        <TotalPrice> 
          <p>Total: </p>
          <p style={{'fontSize' : '20px'}} >{`$${totalPriceFormated(totalPrice)}`}</p>
        </TotalPrice>
        <div style={{'height' : '2.5rem', 'margin' : 'auto'}}>
          <Link to={'/complete-purchase'} style={{'textDecoration' : 'none', 'height' : '100%'}} >
            <Button value='Buy now' />
          </Link>
        </div>
      </VerticalMenuContainer>
    </CartShopContainer>
  )
}