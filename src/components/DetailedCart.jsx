/* Styles */
import { DetailedCartContainer, DetailImg, DetailTitle, Celt, Btns, ProductRow, Styled_div, Styled_celt, ContainerSections } from '../styles/DetailedCart';
import { Count } from '../styles/CartShop';
/* State */
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, subtractTotalPrice, increaseQuantity, decreaseQuantity, addTotalPrice, removeTotalProduct } from "../reducers/cartshopSlice";
/* Components, functions */
import { Button, Icon, GoToHomeBtn } from '../components';
import { totalPriceFormated, deleteSelectedProduct, handleIncreaseQuantity, handleDecreaseQuantity } from '../shared-functions';
/* --------------------- */

export default function (){
  const sections = ['Product', 'Unit price', 'Quantity', 'Total'];
  const { cartProductList, totalPrice } = useSelector(state => state.cartShop);
  const dispatch = useDispatch();
  const reducers = { removeProduct, subtractTotalPrice, increaseQuantity, decreaseQuantity, addTotalPrice, removeTotalProduct }

  return(
    <DetailedCartContainer>
      <ContainerSections>
        {sections.map((sec, id)=>{
        return (
          <Celt key={id}>
            <DetailTitle>
              {sec}
            </DetailTitle>
          </Celt>
        )
      })}
      </ContainerSections>
      {cartProductList.map((product, id)=>{
        return (
          <Styled_div key={id}>
            <Celt >
              <DetailImg src={product.images[0]} alt={product.title} />
              <DetailTitle>{product.title}</DetailTitle>
            </Celt>
            <Celt>
              <DetailTitle>{`$${totalPriceFormated(product.price)}`}</DetailTitle>
            </Celt>
            <Celt direction='row' >
              <Count value={`x${product.quantity}`} readOnly />
              <Btns>
                <div style={{'display': 'flex', 'flexDirection':'column'}} >
                  <Icon name='plus' size='18px' functionClick={()=>handleIncreaseQuantity(product, reducers, dispatch)} />
                  <Icon name='dash' size='18px' functionClick={()=>handleDecreaseQuantity(product, reducers, dispatch)} />
                </div>
                <Icon name='trash' size='20px' functionClick={()=>deleteSelectedProduct(product, reducers, dispatch)} />
              </Btns>
            </Celt>
            <Celt>
              <DetailTitle>{`$${totalPriceFormated(product.price * product.quantity)}`}</DetailTitle>
            </Celt>
          </Styled_div>
        )})}
          <ProductRow>
            <GoToHomeBtn />
            <Styled_celt>
              <DetailTitle style={{'fontWeight': 'bold'}}>{`Total to pay: $${totalPriceFormated(totalPrice)}`}</DetailTitle>
            </Styled_celt>
            <Styled_celt>
              <Button value={'Confirm purchase'} />
            </Styled_celt>
          </ProductRow>
    </DetailedCartContainer>
  )
}

