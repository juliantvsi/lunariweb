import styled from "styled-components";
import theme from "../theme";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  background-color: ${theme.primaryColor};
  gap: 1.5rem;
  `
export const Paragraph = styled.p`
  font-style: italic;
  font-size: 1.6rem;
  color: #fff;
  font-weight: 300;
  `
export const IconsContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #fff;
  border-radius: 4px;
  width: fit-content;
  padding: .3rem .5rem;
  gap: 1.5rem;
  `
export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `
export const Text = styled.span`
  color: ${theme.secondaryColor};
  font-size: 12px;
  `