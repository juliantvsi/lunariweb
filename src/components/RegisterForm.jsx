import { Styled_form, Styled_h2, Styled_button, Styled_a, Styled_em, Styled_p, Styled_message_div,  } from '../styles/Form';
import { Input, TemporaryMessage, Icon, Button } from '../components';
import { useState, useEffect } from 'react';
import { CONFIGTRANSLATE } from '../translations/translate';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { isEmailValid, doPasswordsMatch } from '../shared-functions';

export default function RegisterForm({handleInputChange}){
  const { currentLanguage } = useSelector(state=>state.lang);
  const language = CONFIGTRANSLATE[currentLanguage].form;
  const navigate = useNavigate();

  //## == States == ## //
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password : '',
    rePassword : '',
    validated: false,
  })

  // errors
  const [errors, setErrors] = useState({
    rePassword: false,
    email: false,
  });

  const [touched, setTouched] = useState({
    userInputTouch: false,
    passwordInputTouch: false,
    rePasswordInputTouch: false,
    emailInputTouch: false
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

  //sucess message
  const [success, setSuccess] = useState(false);

  //## xx States xx ## //

  useEffect(() => {
    const newErrors = { ...errors };
    
    if (touched.emailInputTouch) {
      if (isEmailValid(inputValue.email)) {
        newErrors.email = false;
      } else {
        newErrors.email = true;
      }
    }
    if (touched.rePasswordInputTouch) {
      if (doPasswordsMatch(inputValue.password, inputValue.rePassword)) {
        newErrors.rePassword = false;
      } else {
        newErrors.rePassword = true;
      }
    }
    setErrors(newErrors);
  }, [inputValue.email, inputValue.password, inputValue.rePassword, touched.emailInputTouch, touched.passwordInputTouch, touched.rePasswordInputTouch]);

  return(
      success ? (
        <Styled_message_div>
          <Styled_p> 
          <Icon name={'check-circle'} size={'4rem'} />
          {language.messageSuccess }
          </Styled_p>
        </Styled_message_div>
      ) : (
        <Styled_form onSubmit={sendNewUserToDb} >

        <Styled_h2>
          {language.createAccount}
        </Styled_h2>
  
        <Input type={'text'} name='name' placeholder={language.name} 
        onChangeFunction={()=>handleInputChange(event, setInputValue)}
        />
  
        <div>
          <Input type={'text'} name='email' placeholder={language.email} 
          onChangeFunction={()=>handleInputChange(event, setInputValue)}
          onFocusFunction={() => setTouched((prevTouched) => ({ ...prevTouched, emailInputTouch: true }))}
          onBlurFunction={()=>setTouched({emailInputTouch: false})}
          />
  
        {!touched.emailInputTouch ? (
          <TemporaryMessage
          message={language.errorInvalidEmail}
          type={2} 
          isVisible={errors.email ? true : false} 
          left={'50%'}
          top={'50%'}
          timeout={1500}
          />
        ) : null}
        </div>
  
        <Input type={'password'} name='password' placeholder={language.password} 
        onChangeFunction={()=>handleInputChange(event, setInputValue)}
        />

        <div>
          <Input type={'password'} name='rePassword' placeholder={language.repeatPassword} 
          onChangeFunction={()=>handleInputChange(event, setInputValue)}
          onFocusFunction={() => setTouched((prevTouched) => ({ ...prevTouched, rePasswordInputTouch: true }))}
          onBlurFunction={()=>setTouched({rePasswordInputTouch: false})}
          />

          {!touched.rePasswordInputTouch ? (
            <TemporaryMessage
            message={language.errorInvalidRePassword}
            type={2} 
            isVisible={errors.rePassword ? true : false} 
            left={'50%'}
            top={'50%'}
            timeout={1500}
            />
          ) : null}
        </div>
        
        <Styled_button type='submit'>
          {language.singUp}
        </Styled_button>
  
        <Styled_em fontSize={'.9rem'}>
          {language.haveAccount}
          <Styled_a  fontSize={'.9rem'} onClick={()=>navigate('/login')} >
            {language.singIn}
          </Styled_a>
        </Styled_em>
  
        {
          showMessage ? (
            <TemporaryMessage
            message={serverResponse.message}
            type={serverResponse.messageType} 
            isVisible={true} 
            left={'50%'}
            top={'50%'}
            />
          ) : null
        }
        
        <Icon name={'house-fill'} size={'1.5rem'} functionClick={()=>navigate('/')} />

      </Styled_form>
      )
  )

  //## == Functions == ## //
  //register
  function sendNewUserToDb(event) {
    event.preventDefault();
    let resStatus = null

    setServerResponse({
      showMessage: false,
    })

    if (inputValue.name.length === 0 || inputValue.email.length === 0 || inputValue.password.length === 0 || inputValue.rePassword.length === 0){
      setServerResponse({
        message: language.error404,
        messageType: 2, 
        showMessage: true,
      })
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1500);
      return
    }
    if (errors.rePassword || errors.email) {
      setServerResponse({
        message: language.error400,
        messageType: 2, 
        showMessage: true, 
      })
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 1500);
      return
    }
    
    fetch('https://lunari-cyan.vercel.app/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputValue),
  })
    .then((response) => {
      resStatus = response.status
      if(resStatus === 201){
        setSuccess(true)
      }else{
        setServerResponse({
          message: language.messageError,
          messageType: 2, 
          showMessage: true,
        })
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 1500);
      }
    })
    .catch((error) => {
      setServerResponse({
        message: error,
        messageType: 2, 
        showMessage: true,
      })
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 2500);
    });
  }
  //## xx Functions xx ## //
}