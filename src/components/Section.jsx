/* Styles */
import { StyledTitle, ProductsContainer, Loader, LoaderContainer } from '../styles/shared-styles';
import { SectionContainer } from '../styles/Section';
/* Api and data */
import { urlFetch } from '../shared-functions';
/* Components and functions */
import { ProductBox, ContentNotFound } from '../components';
/* State and React */
import { useDispatch, useSelector } from "react-redux";
import { setProduct, setActive } from "../reducers/productSlice";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
/* ----- */

export default function Section({title, category, order}){
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState(null);
  const dispatch = useDispatch();
  const { favoriteList } = useSelector(state=>state.favorite);
  const { search } = useSelector(state=>state.productInfo);
  let productListOrdened = null
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    async function fetchData() {
      if (path.startsWith('/search')) {
        try {
          const queryParams = new URLSearchParams(location.search);
          const query = queryParams.get('query');
          const response = await fetch(`${urlFetch}/search?query=${query}`);
          if (!response.ok) throw new Error('Error in the request');
          const searchResult = await response.json();
          setProductList(searchResult);
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
      } else if (category === 'topRated') {
        try {
          const response = await fetch(`${urlFetch}top-rated`)
          if (!response.ok) throw new Error('Error in the request');
          const topRated = await response.json();
          setProductList(topRated);
          setIsLoading(false)
        } catch (error) {
          console.error(error);
        }
      } else if (category === 'bestSellers') {
        try {
          const response = await fetch(`${urlFetch}bestsellers`)
          if (!response.ok) throw new Error('Error in the request');
          const bestSellers = await response.json();
          setProductList(bestSellers);
          setIsLoading(false)
        } catch (error) {
          console.error(error);
        }
      } else if (category === 'favorites') {
        setProductList(favoriteList);
        setIsLoading(false)
      } else {
        try {
          const response = await fetch(`${urlFetch}products/${category}`);
          if (!response.ok) throw new Error('Error in the request');
          const result = await response.json();
          setProductList(result);
          setIsLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchData();
  }, [category, search]);

  /* functions */
  const handleCardClick = (product) => {
    dispatch(setActive(true))
    dispatch(setProduct(product))
  };

  function orderProductList(){
      if(order === "lowToHigh"){
        productListOrdened = productList.sort((a, b) => a.price - b.price);
      }
      if(order === "highToLow"){
        productListOrdened = productList.sort((a, b) => b.price - a.price);
      }
  }
  /* -------------- */
  
  orderProductList()

  return (
    <SectionContainer>
      <StyledTitle>{title}</StyledTitle>
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : (
        <ProductsContainer>
          {!productList || productList.length === 0 ? (
            <ContentNotFound />
          ) : !order ? (
            productList.map((product, key) => (
              <ProductBox
                key={key}
                _id={product._id}
                images={product.images}
                price={product.price}
                brand={product.brand}
                category={product.category}
                title={product.title}
                rating={product.rating}
                features={product.features}
                quantity={product.quantity}
                handleCardClick={() => handleCardClick(product)}
              />
            ))
          ) : (
            productListOrdened.map((product, key) => (
              <ProductBox
                key={key}
                _id={product._id}
                images={product.images}
                price={product.price}
                brand={product.brand}
                category={product.category}
                title={product.title}
                rating={product.rating}
                features={product.features}
                quantity={product.quantity}
                handleCardClick={() => handleCardClick(product)}
              />
            ))
          )}
        </ProductsContainer>
      )}
    </SectionContainer>
  );
}

