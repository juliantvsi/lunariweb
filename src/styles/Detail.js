import styled, { keyframes } from "styled-components";
import theme from "../theme";

export const DetailContainer = styled.div`
  width: 800px;
  height: 30rem;
  background: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 15% 75% 10%;
  border: 3px solid ${theme.contrastColor};
  border-radius: 4px;
  padding: 1.5rem;
  @media(max-width: 810px){
    width: 600px;
  }
  @media(max-width: 600px){
    width: 400px;
    height: auto;
    grid-template-columns: 100%;
    grid-template-rows: 15% 50% 25% 10%;
  }
  @media(max-width: 418px){
    width: 100%;
  }
  `
export const TopBar = styled.div`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/3;
  grid-row: 1/2;
  padding: 0 0 0 1rem;
  @media(max-width: 600px){
    grid-template-column: 80% 20%;
  }
  `
export const TextStyled = styled.span`
  font-size: 1.5rem;
  `
export const Rate = styled.div`
  position: absolute;
  left: 2.5rem;
  top: 20%;
  font-weigth: bold;
  z-index: 99;
  font-size: 1rem;
  `  
export const Gallery = styled.div`
  background-color: #fff;
  height: fit-content;
  width: 100%;
  display: grid;
  place-content: center;
  grid-template-row: 60% 40$;
  gap: 2rem;
  grid-column: 1/2;
  grid-row: 2/3;
  margin: auto;
  position: relative;
  `
export const Img = styled.img`
  height: ${props => props.dimension};
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  &: hover{
    transform: scale(1.1);
    transition: transform 0.3s;
  }
  `
export const Specifications = styled.div`
  grid-column: 2/3;
  grid-row: 2/3
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem;
  @media(max-width: 600px){
    grid-column: 1/2;
    margin-bottom: 1rem;
  }
  `
export const BtnContainer = styled.div`
  grid-row: 3/4;
  grid-column: 1/3;
  padding: .5rem 0;
  display: flex;
  aling-items: center;
  justify-content: end;
  gap: .5rem;
  @media(max-width: 600px){
    grid-column: 1/2;
    grid-row: 4/5;
  }
  `
export const PriceContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid ${theme.secondaryColor};
  margin-right: 1rem;
  display: grid;
  place-content: center;
  `