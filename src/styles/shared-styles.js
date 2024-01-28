import styled from "styled-components";
import theme from "../theme";

export const StyledBar = styled.div`
  width: 100%;
  height: ${props => props.size};
  background-color: ${theme.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  `
export const StyledTitle = styled.span`
  height: fit-content;
  width: fit-content;
  text-transform: uppercase;
  font-weight: bold;
  color: ${theme.primaryColor};
  font-size: 1.5rem;
  border-bottom: 3px solid ${theme.secondaryColor};
  grid-row: 1/2;
  display: grid;
  place-content: center;
  @media(max-width: 600px){
    font-size: 1.1rem;
  }
  @media(max-width: 550px){
    margin: 0 auto;
  }
  `
export const ArrowContainerLeft = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: ${props => props.left};
  top: ${props => props.top};
  z-index: 99;
  `
export const ArrowContainerRight = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  right: ${props => props.right};
  top: ${props => props.top};
  z-index: 99;
  `
export const ProductsContainer = styled.div`
  width: 100%;
  grid-row: 2/3;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 3.5rem .8rem;
  padding: 3rem 0;
  `
/* Verical menu */
export const VerticalMenuContainer = styled.ul`
  height: fit-content;
  width: fit-content;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  `

/* ----------- */
//Loader
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  `
export const Loader = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #ff6b6b;
  animation: spin 1s infinite linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  `