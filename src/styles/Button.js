import styled from 'styled-components';
import theme from '../theme';

export const StyledButton = styled.button`
  display: grid;
  place-content: center;
  border: none;
  height: 100%;
  width: fit-content;
  padding: 0 10px;
  background-color: ${theme.secondaryColor};
  color: #000;
  font-weight: bold;
  font-size: 1.2vw;
  text-aling: center;
  cursor: pointer;
  text-transform: uppercase;

  &:hover{
    background-color: ${theme.primaryColor};
    color: ${theme.secondaryColor};
    transition: .2s;
  }
`;