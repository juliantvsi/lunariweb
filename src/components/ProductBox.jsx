/* Styles */
import { ProductContainer, FirstRow, ProducTitle, ProductSpan, InStock, BtnsContainer, ProductImg } from "../styles/ProductBox";
import theme from "../theme";
/* State */
import { useDispatch, useSelector } from "react-redux";
import { addProduct, addTotalPrice } from "../reducers/cartshopSlice";
import { addProductToFav, removeProductToFav } from '../reducers/favoriteSlice';
import { setProduct, setActive } from "../reducers/productSlice";
/* Components, functions and react */
import { Icon, Button, TemporaryMessage } from "../components";
import { useNavigate } from "react-router-dom";
import { addProductToCart } from '../shared-functions';
/* -------------------- */

export default function ({_id, images, title, price, brand, category, rating, features, quantity}){
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { favoriteList } = useSelector(state=>state.favorite)
  const productInFav = favoriteList.find(product => product._id === _id)
  const product = {_id, images, title, price, brand, category, rating, features, quantity}
  const reducers = { addProduct, addTotalPrice }

  /* Functions */
  const handleFavorite = () => {
    productInFav ? dispatch(removeProductToFav(_id)): dispatch(addProductToFav(product))
  };
  const handleCardClick = (product) => {
    dispatch(setActive(true))
    dispatch(setProduct(product))
  };
  const redirectToCart = (product, dispatch, reducers) =>{
    addProductToCart(product, reducers, dispatch)
    navigate('/complete-purchase')
  }

  const handleAddProduct = (product, dispatch, reducers) =>{
    addProductToCart(product, dispatch, reducers)
    return <TemporaryMessage message={'Product add'} type={1} />
  }
  /* --------- */
  return(
    <ProductContainer  >
      <div style={{'position': 'absolute', 'top': '.8rem', 'right': '1rem'}} > 
        <Icon 
          name={productInFav ? 'heart-fill' : 'heart'} 
          functionClick={handleFavorite} 
          color={productInFav ? theme.red : null}
        />
      </div>
      <div onClick={()=>handleCardClick(product)} >
        <FirstRow >
          <ProductSpan>
            <Icon name='star-fill' />
            {rating.rate}
          </ProductSpan>
        </FirstRow>
        <ProductImg src={images[0]} alt={title} />
        <ProducTitle >{title}</ProducTitle>
        <ProductSpan backgroundColor={theme.contrastColor} >{`$${price}`} </ProductSpan>
        <InStock color={rating.count >= 1 ? '#00DFA2' : '#B04759'} >
          {rating.count >= 1 ? 'In Stock' : 'Stock out'} 
        </InStock>
      </div>
      
      <BtnsContainer>
        <Button value={'Buy'} functionClick={()=>redirectToCart(product, dispatch, reducers )} />
        <Button value={'Add to cart'} functionClick={()=>handleAddProduct(product, reducers, dispatch)} />
      </BtnsContainer>
    </ProductContainer>
  )
}