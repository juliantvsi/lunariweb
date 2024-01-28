import { LoginBar, Logo, Navbar, Section, Detail, ContentNotFound, GoToHomeBtn } from '../components';
import { useSelector } from 'react-redux';
import { StyledMain } from '../styles/Main';

export default function Favorites(){
  const { isActive } = useSelector(state => state.productInfo);
  const { favoriteList } = useSelector(state => state.favorite);

  return(
    <>
      <LoginBar />
      <Logo />
      <Navbar />
      <StyledMain>
        {favoriteList.length < 1 ? <ContentNotFound /> : (
          <StyledMain>
            <Section title={'Favorites'} category={'favorites'}></Section>
            <GoToHomeBtn />
          </StyledMain>
        ) }
        {isActive ? <Detail /> : null}
      </StyledMain>
    </>
  )
}

