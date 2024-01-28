import styled from "styled-components";
import theme from "../theme";

export const Styled_ul = styled.li`
  list-style: none;
  background-color: ${theme.primaryColor};
  padding: 1rem;
  display: flex;
  gap: 2rem;
  width: fit-content;
  min-height: 160px;
  position: absolute;
  z-index: 999;
  `
export const Styled_li = styled.li`
  list-style: none;
  height: fit-content;
  padding: 0.3rem;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
  color: ${theme.secondaryColor};
  cursor: pointer;
  &:hover {
    color: #fff;
    border-bottom: 2px solid ${theme.secondaryColor};
    transition: 0.2s;
  }
  `
export const Submenu = styled.ul`
  width: fit-content;
  width: 100%;
  background-color: ${theme.primaryContrast};
  `
export const Styled_span = styled.span`
  height: fit-content;
  padding: 0.3rem;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
  color: ${theme.secondaryColor};
  cursor: pointer;
  `