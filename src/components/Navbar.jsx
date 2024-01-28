/* components and functions */
import { Button, Searchbar, Icon, Counter, CategoryMenu, CartShop } from "../components";
/* ------------------------ */
/* styles */
import { StyledNavbar, BtnsContainer, CounterContainer } from "../styles/Navbar";
import { StyledBar } from '../styles/shared-styles';
/* ------ */
/* state */
import { useSelector, useDispatch } from "react-redux";
import { setMenuActive } from '../reducers/menuSlice';
import { setCartActive } from "../reducers/cartshopSlice";
/* ----- */
/* React-redux */
import { NavLink } from "react-router-dom";
/* ----------- */

export default function (){
  const dispatch = useDispatch();
  const { menuActive } = useSelector(state => state.menu);
  const { cartActive, cartCount } = useSelector(state => state.cartShop);

  /* functions */
  function handleCartActive(){ //Check if the shopping cart is active//
    cartActive ? dispatch(setCartActive(false)) : dispatch(setCartActive(true));
  }
  /* --------- */
  
  return(
    <StyledBar size={'3rem'} >
      <StyledNavbar>
        <div 
        onMouseEnter={()=>dispatch(setMenuActive(true))} 
        onMouseLeave={()=>dispatch(setMenuActive(false))}
        style={{height:'100%'}}
        >
          <Button value='Categories' />
          {menuActive ? <CategoryMenu  /> : null}
        </div>
        <BtnsContainer>
          <Searchbar />
          <NavLink to={'/favorites'} >
            <Icon name='heart' size='1.6rem' colorHover={'#fff'} />
          </NavLink>
          <Icon name='cart' size='1.8rem'  colorHover={'#fff'} functionClick={handleCartActive} />
          <CounterContainer>
            <Counter counter={cartCount} />
          </CounterContainer>
        </BtnsContainer>
      </StyledNavbar>
      {cartActive ? <CartShop/> : null}
    </StyledBar>
  )
}