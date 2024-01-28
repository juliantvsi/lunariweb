import styled from "styled-components";
import theme from "../theme";

export const LoginBar_container = styled.div`
  height: 100%;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-end; 
  align-items: center;
  gap: .5rem;
  color: ${theme.textColor};
  background: transparent;
  position: relative;
  `
export const LoginBar_text = styled.p`
  font-weight: 700;
  font-size: 1vw;
  `
export const LoginBar_div = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  gap: .5rem;
  `