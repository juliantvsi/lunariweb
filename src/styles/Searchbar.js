import theme from "../theme";
import styled from "styled-components";

export const StyledSearchbar = styled.form`
  width: 19rem;
  height: 6rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  gap: .5rem;
  border-radius: 6px;
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.55);
  position: absolute;
  top: 130%;
  left: -130%;
  z-index: 8888;
  `
export const StyledInput = styled.input`
  outline: none;
  width: 15rem;
  height: 1.8rem;
  border-radius: 4px;
  border: 1px solid ${theme.primaryColor};
  padding: 0 2.8rem 0 .6rem;
  color: ${theme.primaryColor};
  &:hover{
    border: 1px solid ${theme.secondaryColor}
  }
  `
export const IconContainer = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 50%;
  right: 40px;
  display: grid;
  place-content: center;
  background: transparent;
  `
export const SearchBtn = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background-color: #fff;
  display: grid;
  place-content: center;
  margin: 0 5px;
  `