import styled from "styled-components";
import theme from "../theme";

export const IntoSectionsContainer = styled.div`
  background-color: ${theme.contrastColor};
  height: 200px;
  background-color: ${theme.primaryContrast};
  display: flex;
  justify-content: center;
  `
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-raidus: 16px;
  margin: 0 3rem;
  text-align: center;
  @media (max-width: 890px) {
    margin: 0 2rem;
  }
  @media (max-width: 450px) {
    margin: 0 1rem;
  }
  `
export const Text = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: ${theme.secondaryColor};
  @media (max-width: 890px) {
    font-size: 16px;
  }
  @media (max-width: 450px) {
    font-size: 14px;
  }
  `