import { StyledBar } from '../styles/shared-styles';
import { FooterContainer, Paragraph, IconsContainer, ContactCard, Text } from '../styles/Footer';
import { Icon } from '../components';


export default function Footer(){
  return(
    <FooterContainer>
      <Paragraph>Made by Julián Trevisi</Paragraph>
      <Paragraph>Thank you for visiting</Paragraph>
      <IconsContainer>
        <ContactCard>
          <Icon name='briefcase' size='2rem' colorHover='#fff' cursor='default' />
          <Text>Portfolio</Text>
        </ContactCard>
        <ContactCard>
          <Icon name='linkedin' size='2rem'  colorHover='#fff' cursor='default' />
          <Text>Linkedin</Text>
        </ContactCard>
      </IconsContainer>
    </FooterContainer>
  )
}

