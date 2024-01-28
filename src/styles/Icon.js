import theme from "../theme";
import styled from "styled-components";

export const StyledIcon = styled.i`
  cursor: ${props => props.cursor || 'pointer'};
  color: ${props => props.color || theme.secondaryColor};
  font-size: ${props => props.size};
  padding: 2px 5px;
  &:hover{
    color: ${props => props.colorHover};
    transition: .2s;
  }
`
export const StyledBtnOnClick = styled.button`
  border: none;
  background: transparent;
  `