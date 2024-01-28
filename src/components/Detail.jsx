//Styles
import { DetailContainer, TopBar, Img, Gallery, Rate, Specifications, BtnContainer, PriceContainer } from "../styles/Detail";
import { StyledTitle, Loader } from "../styles/shared-styles";
import { ArrowContainerLeft, ArrowContainerRight } from '../styles/shared-styles';
//Components and functions
import { Icon, Button } from "../components";
import { nextImg, prevImg, addProductToCart } from "../shared-functions";
//State and React
import { useSelector, useDispatch } from "react-redux";
import { setActive } from "../reducers/productSlice";
import { addProduct, addTotalPrice } from "../reducers/cartshopSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
/* ----------- */

export default function (){
  const [img, setImg] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { price, title, images, rating, features, count, id} = useSelector(state => state.productInfo.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reducers = { addProduct, addTotalPrice }
  const product = { images : images, title : title, price : price, rate : rating.rate, count : count, id : id }

  /* Rendering the product features */
  let featuresProduct = null
  if (features && typeof features === "object") {
    const mappedFeatures = Object.entries(features)
      .map(([key, value]) => `${key}: ${value}`);
      featuresProduct = mappedFeatures;
  }
  /* --------------- */

  /* functions */
  function closeWindow() {
    dispatch(setActive(false));
  }
  function addProductCart(){
    dispatch(addProduct(product))
    dispatch(addTotalPrice(product.price))
  }
  const redirectToCart = (product, dispatch, reducers) =>{
    addProductToCart(product, reducers, dispatch)
    navigate('/complete-purchase')
  }
  /* ----------- */

  return(
    <DetailContainer >
      <Rate>
        {rating?.rate}
        <Icon name='star-fill' size='1rem' />
      </Rate>

      <TopBar>
        <StyledTitle>{title}</StyledTitle>
        <Icon name='x' size='3rem' functionClick={closeWindow} />
      </TopBar>
      
      <Gallery>
        <ArrowContainerLeft top='50%' left='20px' >
          <Icon name='arrow-left-circle-fill' size='2.5rem' functionClick={()=>prevImg(img, 3, setImg, setIsLoading)} />
        </ArrowContainerLeft>
        {isLoading ? (
          <Loader />
          ) : (
            <Img src={images[img]} dimension='320px' />
          )}
        <ArrowContainerRight top='50%' right='20px' >
          <Icon name='arrow-right-circle-fill' size='2.5rem' functionClick={()=>nextImg(img, 3, setImg, setIsLoading)} />
        </ArrowContainerRight>
      </Gallery>

      <Specifications>
        <span style={{'fontSize': '1.2rem', 'fontWeight': 'bold', 'textTransform': 'uppercase'}} >About this product</span>
        { featuresProduct != null ? featuresProduct.map((product, id) => <span key={id} >{product}</span> ) : null }
      </Specifications>

      <BtnContainer>   
        <PriceContainer>
          {`$${price}`}
        </PriceContainer> 
        <Button value={'Buy'} functionClick={()=>redirectToCart(product, dispatch, reducers)} />
        <Button value={'Add to cart'} functionClick={addProductCart} />
      </BtnContainer>
    </DetailContainer>
  )
}
