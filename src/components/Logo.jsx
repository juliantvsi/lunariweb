import { Icon } from "../components";
import theme from "../theme";
import { BannerContainer, Logo, Icons } from '../styles/Logo';
import { Link } from "react-router-dom";

export default function (){
  return(
    <BannerContainer>
      <Link to='/'>
        <Logo src="/public/logo.png" alt="Logotipo de la marca Lunari" />
      </Link>
      <Icons>
        <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank">
          <Icon name='whatsapp' size='1.6rem' colorHover={theme.primaryColor} />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <Icon name='facebook' size='1.6rem' colorHover={theme.primaryColor} />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <Icon name='instagram' size='1.6rem' colorHover={theme.primaryColor} />
        </a>
        <a href="https://www.telegram.org" target="_blank">
          <Icon name='telegram' size='1.6rem' colorHover={theme.primaryColor} />
        </a>
      </Icons>
    </BannerContainer>
  )
}