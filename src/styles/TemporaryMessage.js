import styled from "styled-components";
import theme from "../theme";

export const TemporaryMessage_container = styled.div`
  position: absolute;
  top: ${(props) => props.top || '0'};
  left: ${(props) => props.left || '0'};
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: start;
  max-width: 150px;
  width: 150px;
  `
export const TemporaryMessage_message = styled.div`
  padding: .5rem 1rem;
  border-radius: 6px;
  background-color: ${theme.contrastColor};
  font-size: 1rem;
  display: flex;
  visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  gap: .5rem;
  white-space: nowrap;
  width: ${(props) => (props.isVisible ? 'auto' : '0')};
  height: ${(props) => (props.isVisible ? 'auto' : '0')};
  `
export const TemporaryMessage_p = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${theme.primaryColor};
  font-weight: bold;
  `