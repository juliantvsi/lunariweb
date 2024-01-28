import styled, { keyframes } from 'styled-components';
import theme from '../theme';

export const StyledBtn = styled.button`
  background-color: ${theme.secondaryColor};
  height: 100%;
  width: 80px;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  cursor: pointer;
  position: relative;
  margin: 0 .2rem;
  `;

export const StyledHorizontalLine = styled.div`
  background-color: ${theme.primaryColor};
  height: 1.2px;
  width: 70px;
  margin: auto;
  margin-bottom: 4px;
  position: absolute;
  bottom: -15%;
  left: 8%;
`;

export const StyledVerticalLine = styled.div`
  background-color: ${theme.primaryColor};
  height: 22px;
  width: 1.2px;
  position: absolute;
  top: 10%;
  left: 85%;
`;