import { Styled_form, Styled_h2, Styled_button, Styled_a, Styled_em } from '../styles/Form';
import { TemporaryMessage, Input, Icon } from '../components';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CONFIGTRANSLATE } from '../translations/translate';
import { isEmailValid } from '../shared-functions';
import { setUserLogged } from '../reducers/userAuthSlice';

export default function LoginForm({ handleInputChange }) {
  const { currentLanguage } = useSelector((state) => state.lang);
  const language = CONFIGTRANSLATE[currentLanguage].form;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ## == States == ## //
  // input
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    validated: false,
  });

  // errors
  const [inputErrors, setInputErrors] = useState({
    password: false,
    email: false,
  });

  //Server response
  const [serverResponse, setServerResponse] = useState({
    message: null,
    showMessage: false,
    messageType: null,
    timeout: 1500,
  });

  //show message
  const [showMessage, setShowMessage] = useState(false);
  // ## xx States xx ## //

  const [touched, setTouched] = useState({
    passwordInputTouch: false,
    emailInputTouch: false,
  });

  useEffect(() => {
    const newErrors = { ...inputErrors }; 
  
    if (touched.emailInputTouch) {
      if (isEmailValid(inputValue.email)) {
        newErrors.email = false;
      } else {
        newErrors.email = true;
      }
    }
  
    setInputErrors(newErrors);
  }, [inputValue.email, touched.emailInputTouch]);

  return (
    <Styled_form onSubmit={authUserInDb} >
      <Styled_h2>{language.btn}</Styled_h2>

      <div>
      <Input
        type='text'
        name='email'
        placeholder={language.email}
        onChangeFunction={(event) => handleInputChange(event, setInputValue)}
        onFocusFunction={() => setTouched((prevTouched) => ({ ...prevTouched, emailInputTouch: true }))}
        onBlurFunction={()=>setTouched({emailInputTouch: false})}
      />

      {!touched.emailInputTouch ? (
          <TemporaryMessage 
          type={2} 
          isVisible={inputErrors.email} 
          message={language.errorInvalidEmail}
          timeout={1500}
          left={'50%'}
          top={'50%'}
          />
        ) : null}
      </div>

      <Input
        type='password'
        name='password'
        placeholder={language.password}
        onChangeFunction={(event) => handleInputChange(event, setInputValue)}
        onFocusFunction={() => setTouched((prevTouched) => ({ ...prevTouched, passwordInputTouch: true }))}
      />

      {showMessage ? (
        <TemporaryMessage 
          type={serverResponse.messageType} 
          isVisible={serverResponse.showMessage} 
          message={serverResponse.message} 
          top={'50%'}
          left={'50%'}
          timeout={1500}
        />
      ) : null}

      <Styled_button type='submit'>{language.btn}</Styled_button>

      <Styled_em fontSize={'.9rem'}>
        {language.dontAccount}
        <Styled_a fontSize={'.9rem'} onClick={() => navigate('/singup')}>
          {language.singUp}
        </Styled_a>
      </Styled_em>

      <Icon name={'house-fill'} size={'1.5rem'} functionClick={()=>navigate('/')} />
    </Styled_form>
  );

 // ## == States == ## //
  //Login function
  function authUserInDb(event){
    event.preventDefault();
    let statusCodeResponse = null

    setServerResponse({
      message: null,
      messageType: null,
      showMessage: false,
      timeout: 1500,
    });

    if (inputValue.email.length === 0 || !inputValue.password.length === 0){
      setServerResponse({
        message: language.error404,
        messageType: 2, 
        showMessage: true,
      })
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1500);
      return
    }
    if (inputErrors.password || inputErrors.email) {
      setServerResponse({
        message: language.error400,
        messageType: 2, 
        showMessage: true,
      })
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1500);
      return
    }
    fetch('https://lunari-cyan.vercel.app/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValue),
    })
      .then((response) => {
        statusCodeResponse = response.status

        if(statusCodeResponse === 404){
          setServerResponse({
            message: language.errorUserNotFound,
            messageType: 2, 
            showMessage: true, 
          })
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 1500);
          return
        }
        if(statusCodeResponse === 403){
          setServerResponse({
            message: language.errorUserNotAuthenticated,
            messageType: 2, 
            showMessage: true,
            timeout: 2500 
          })
          setShowMessage(true);
          setTimeout(() => setShowMessage(false), 1500);
          return
        }
        return response.json()
        .then((data) => {
          dispatch(setUserLogged(data));
          navigate('/');
        })
      })
      .catch((error) => {
        console.log(error)
        setServerResponse({
          message: language.unexpectedError,
          messageType: 2, 
          showMessage: true,
        })
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 1500);
        return
      });
  }
  // ## xx Functions xx ## //
};