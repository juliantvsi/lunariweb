import styled from "styled-components";
import theme from "../theme";

export const StyledBanner = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 22rem;
  `
export const Img = styled.div`
  background: url('/src/assets/images/banners/${props=>props.bannerId}.jpg');
  background-size: 100% 100%;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: background-image .6s ease-in-out; 
  `