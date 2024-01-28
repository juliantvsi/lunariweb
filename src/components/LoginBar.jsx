import { LoginBar_container, LoginBar_text, LoginBar_div } from '../styles/LoginBar';
import { StyledBar } from '../styles/shared-styles';
import { Button, Icon } from '../components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unsetUserLogged } from '../reducers/userAuthSlice';
import theme from '../theme';
import { changeLanguage } from '../reducers/langSlice';
import { CONFIGTRANSLATE } from '../translations/translate';

export default function(){
  const navigate = useNavigate();
  const dispath = useDispatch();
  const { userAuth } = useSelector(state=>state.userAuth);
  const { currentLanguage } = useSelector(state=>state.lang);

  return(
    <StyledBar size={'1.8rem'}>
      <LoginBar_container>

        <LoginBar_div>
          <LoginBar_text>
            {CONFIGTRANSLATE[currentLanguage].loginBar.changeLang}
          </LoginBar_text>
          <Button value={currentLanguage === 'ES' ? 'En' : 'Es'} functionClick={handleLanguage} />
        </LoginBar_div>

        <LoginBar_text> {CONFIGTRANSLATE[currentLanguage].loginBar.greeting} </LoginBar_text>
        {
         Object.keys(userAuth).length === 0 ? (
            <>
              <Button value={CONFIGTRANSLATE[currentLanguage].loginBar.loginBtn} functionClick={navToLogin} />
              <Button value={CONFIGTRANSLATE[currentLanguage].loginBar.singUpBtn} functionClick={navToSingUp} />
            </>
          ) : (
            <>
            <LoginBar_text style={{color: theme.secondaryColor, textTransform: 'uppercase'}}>{userAuth.user.name}!</LoginBar_text>
            <Icon name='person-circle' size='1.2rem' functionClick={redirectToProfilePage} />
            <Button value={CONFIGTRANSLATE[currentLanguage].loginBar.logOut} functionClick={singOut} />
            </>
          )
        }
      </LoginBar_container>
    </StyledBar>
  )

  /* Functions */
  function navToLogin(){
    navigate('/login')
  }

  function navToSingUp(){
    navigate('/singup')
  }

  function singOut(){
    dispath(unsetUserLogged())
  }

  function redirectToProfilePage(){
    navigate('/profile')
  }

  function handleLanguage(){
    currentLanguage === 'ES' ? dispath(changeLanguage('EN')) : dispath(changeLanguage('ES'))
  }
  /* --------------------- */
}

          