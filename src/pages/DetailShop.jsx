import { LoginBar, Logo, ContentNotFound, Navbar, DetailedCart } from '../components';
import { StyledMain } from '../styles/Main';
import { useSelector } from 'react-redux';

export default function DetailShop(){
  const { cartProductList } = useSelector(state => state.cartShop);

  return(
    <>
      <LoginBar />
      <Logo />
      <Navbar />
      <StyledMain>
        {cartProductList.length < 1 ? <ContentNotFound /> : <DetailedCart />}
      </StyledMain>
    </>
  )
}

