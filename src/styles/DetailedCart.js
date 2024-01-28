import styled from "styled-components";
import theme from "../theme";

export const DetailedCartContainer = styled.div`
  display: grid;
  grid-template-columns: 40% repeat(3, 20%);
  grid-template-row: auto;
  width: 1200px
  height: fit-content;
  gap: .2rem;
  padding: 2rem 0;
  @media(max-width: 920px){
    grid-template-columns: 1fr 1fr;
  }
  `
export const ContainerSections = styled.div`
  display: grid;
  grid-column: 1/5;
  grid-template-columns: 40% repeat(3, 20%);
  width: 100%;
  @media(max-width: 920px){
    display: none;
  }
  `
export const DetailTitle = styled.h2`
  display: grid;
  font-size: 16px;
  font-weight: 400;
  text-align: ${props=>props.align || "center"};
  border: none;
  padding-right: 1rem;
  padding-left: 1rem;
  @media(max-width: 430px){
    font-size: 14px;
    padding: .5rem 0;
  }
  @media(max-width: 358px){
    font-size: 12px;
    padding: .2rem 0;
  }
  `
export const DetailImg = styled.img`
  padding: 0 1rem;
  margin: 0 auto;
  width: auto;
  height: 100px;
  @media(max-width: 358px){
    height: 60px;
  }
  
  `
export const Celt = styled.div`
  display: flex;
  flex-direction: ${props=>props.direction || 'column'};
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.contrastColor};
  background-color: #fff;
  padding: .5rem 0;
  text-align: center;
  @media(max-width: 920px){
    padding: 0;
  }
  `
export const Btns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `
export const ProductRow = styled.div`
  height: 3.2rem;
  width: 100%;
  position: relative;
  display: flex;
  background-color: #fff;
  grid-column: 1/5;
  justify-content: end;
  @media(max-width: 920px){
    flex-direction: column;
    height: 4.2rem;
    align-items: end;
  }
  @media(max-width: 358px){
    height: 5rem;
  }
  `
export const Styled_div = styled.div`
  display: grid;
  grid-column: 1/5;
  grid-template-columns: 40% repeat(3, 20%);
  width: 100%;
  @media(max-width: 920px){
    grid-template-columns: 1fr 1fr;
  }
  `
export const Styled_celt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  height: 100%;
  @media(max-width: 358px){
    width: 45%;
  }
  `