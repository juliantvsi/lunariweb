import styled from "styled-components";
import theme from "../theme";

export const Form_background = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgb(73,190,183);
  background: linear-gradient(333deg, rgba(73,190,183,1) 0%, rgba(43,53,61,1) 78%);
  width: 100%;
  height: 100vh;
`
export const Styled_form = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 4rem 3rem;
  gap: 1.5rem;
  border-radius: 6px;
  margin: auto;
  max-width: 21rem;
  position: relative;
  `
export const Styled_h2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  width: 100%;
  margin: 0 auto;
  background-color: ${theme.secondaryColor};
  text-align: center;
  color: ${theme.primaryColor};
  padding: .5rem 1rem;
  `
export const Styled_button = styled.button`
  height: 2rem;
  border: none;
  border-radius: 16px;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: ${theme.secondaryColor};
  background-color: ${theme.contrastColor};
  box-shadow: 0px 0px 6px 0px rgba(0,0,0,0.75);
  padding: 4px;
  `
export const Styled_a = styled.a`
  color: ${theme.secondaryColor};
  cursor: pointer;
  padding: 0 .5rem;
  font-weight: bold;
  font-size: ${props => props.fontSize || '1rem'}

  `
export const Styled_em = styled.em`
  color: ${theme.primaryColor};
  font-size: ${props => props.fontSize || '1rem'}
  `
export const Styled_message_div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: relative;
  background-color: #fff;
  width: 20rem;
  border-radius: 6px 6px 0 0;
  padding: 2rem;
  `
export const Styled_div = styled.div`
  display: flex;
  height: 2rem;
  width: 100%;
  background-color: transparent;
  position: absolute;
  bottom: 1%;
  left: 3%;
  border-radius: 0 0 6px 6px;
  `
export const Styled_p = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  `
export const Styled_btn = styled.button`
  border: none;
  color: ${theme.primaryColor};
  background-color: transparent;
  font-weight: bold;
  cursor: pointer;
  `