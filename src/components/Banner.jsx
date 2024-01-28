import { Icon } from "../components";
import { useState } from "react";
import { StyledBanner, Img } from "../styles/Banner";
import { ArrowContainerLeft, ArrowContainerRight } from "../styles/shared-styles";
import { nextImg, prevImg } from '../shared-functions';

export default function Banner() {
  let [bannerId, setBannerId] = useState(0);

  return (
    <StyledBanner>
      <ArrowContainerLeft left='80px' >
        <Icon 
          name='arrow-left-circle-fill' 
          size='3rem' colorHover={'#fff'} 
          functionClick={()=>prevImg(bannerId, 2, setBannerId)} 
        />
      </ArrowContainerLeft>

      <Img bannerId={bannerId} />

      <ArrowContainerRight right='80px' >
        <Icon 
          name='arrow-right-circle-fill' 
          size='3rem' colorHover={'#fff'} 
          functionClick={()=>nextImg(bannerId, 2, setBannerId)}
        />
      </ArrowContainerRight>
    </StyledBanner>
  )
}

