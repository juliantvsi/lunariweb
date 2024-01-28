import styled from "styled-components";
import theme from "../theme";

export const ProductContainer = styled.div`
  height: 20rem;
  width: 15rem;
  display: grid;
  background-color: #fff;
  text-align: center;
  position: relative;
  cursor: pointer;
  border: 1px solid #bfbfbf;
  margin: auto;
  grid-template-rows: 85% 15%;
  &: hover{
    border: 1px solid ${theme.secondaryColor};
    transition: .2s;
  }
  `
export const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  `
export const ProducTitle = styled.h2`
  color: ${theme.primaryColor};
  text-align: center;
  font-size: 1.1rem;
  margin: 0 20px;
  height: 4rem;
  `
export const ProductSpan = styled.span`
  font-weight: bold;
  color: #000;
  text-align: center;
  display: grid;
  place-content: center;
  background-color: ${props=> props.backgroundColor};
  padding: .5rem;
  `
export const InStock = styled.span` 
  background-color: ${props=>props.color};
  border-radius: 6px;
  display: grid;
  place-content: center;
  font-weight: bold;
  font-size: .8rem;
  width: fit-content;
  height: fit-content;
  position: absolute;
  left: 5.5rem;
  top: -10px;
  padding: 2px 4px;
  `
export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: .6rem 0;
  height: 3rem;
  `
export const ProductImg = styled.img`
  height: 7rem;
  max-width: 220px;
  margin: 0 auto;
  `