import styled from "styled-components";
import theme from "../theme";

export const CartShopContainer = styled.div`
  position: absolute;
  top: 41%;
  right: 5%;
  border: 1px solid ${theme.primaryColor};
  padding: .8rem 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-height: 30rem;
  overflow-y: auto;
  overflow-x: hidden;
  gap: 1rem;
  z-index: 888;
  `
export const MessageCartEmpty = styled.span`
  background-color: ${theme.colorAlert};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 2rem;
  ` 
export const ProductInfoContainer = styled.div`
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 100px 110px 90px;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  `
export const InfoContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  `
export const TotalPrice = styled.div`
  font-weight: bold;
  padding: 1.2rem 1.2rem;
  background-color: #f2f2f2;
  margin-bottom: .8rem;
  display: flex;
  justify-content: space-between;
  `
export const ProductImg = styled.img`
  max-height: 5rem;
  max-width: 6rem;
  grid-column: 1/2;
  margin: auto; 
  `
export const ProductInfo = styled.span`
  font-weight: bold;
  text-align: center;
  font-size: 12px;
  padding: 0 .5rem;
  `
export const Count = styled.input`
  height: 2rem;
  width: 2rem;
  border-radius: 6px;
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
  outline: none;
  padding:  0 8px;
  font-weight: bold;
  `
export const Icons = styled.div`
  display: flex;
  text-align: center;
  width: fit-content;
  jusfity-content: center;
  align-items: center;
  padding: 0 .5rem;
  `