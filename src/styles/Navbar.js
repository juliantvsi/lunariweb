import theme from "../theme"
import styled from "styled-components"

export const StyledNavbar = styled.nav`
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  padding: 0 15px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  `
export const BtnsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .4rem;
  height: fit-content;
  width: fit-content;
  background: transparent;
  position: relative;
  `
export const CounterContainer = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;
  position: absolute;
  right: -8px;
  top: 0;
  background: transparent;
  `
export const MenuContainer = styled.div`
  width: fit-content;
  height: fit-content
  `