import styled from "styled-components";
import theme from "../theme";

export const BtnGoHome = styled.button`
  text-aling: center;
  font-weigth: bold;
  padding: .2rem;
  border: none;
  border-radius: 6px;
  border-bottom: 2px solid ${theme.secondaryColor};
  width: fit-content;
  heigth: fit-content;
  font-size: 16px;
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: transparent;
  cursor: pointer;
  `