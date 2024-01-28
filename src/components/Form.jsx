import { Styled_form, Styled_h2, Styled_button, Styled_a, Styled_em, Styled_message_div, Styled_div, Styled_p, Styled_btn } from '../styles/Form';
import { Icon, TemporaryMessage } from '../components';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { setUserLogged } from '../reducers/userAuthSlice';
import { CONFIGTRANSLATE } from '../translations/translate';
import theme from '../theme';
import { isEmailValid, doPasswordsMatch } from '../shared-functions';

export default function Form(){
  const location = useLocation();
  const dispath = useDispatch();
  const navigate = useNavigate();
  const { currentLanguage } = useSelector(state=>state.lang);
  const language = CONFIGTRANSLATE[currentLanguage].form;
  
  //show form
  const [showForm, setShowForm] = useState(true);
  //Server response
  const [serverResponse, setServerResponse] = useState({
    message: null,
    showMessage: false,
    messageType: null,
    timeout: null
  });
  //User input
  const [inputValue, setInputValue] = useState({
    name: '',
    email: '',
    password : '',
    rePassword : '',
    validated: false,
  })
  
  const [visible, setVisible] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    password: false,
    rePassword: false,
    email: false,
  });

  const [touched, setTouched] = useState({
    userInputTouch: false,
    passwordInputTouch: false,
    rePasswordInputTouch: false,
    emailInputTouch: false
  });

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

  useEffect(() => {
    if (serverResponse.showMessage) {
      const resetServerResponse = setTimeout(() => {
        setServerResponse({ ...serverResponse, showMessage: false });
      }, 1500); 

      return () => clearTimeout(resetServerResponse);
    }
  }, [serverResponse]);
  
  return(
    
    <div>{location}</div>


    !showForm
      ? (
        <Styled_message_div>
          <Styled_p> 
          <Icon name={'check-circle'} size={'4rem'} />
          {language.messageSuccess }
          </Styled_p>
        </Styled_message_div>
      ) 
      : (
        <Styled_form onSubmit={location.pathname === '/login' ? authUserInDb : sendNewUserToDb} >
          {location.pathname === '/login'
            ? (
              <>
                <Styled_h2>
                  {language.singIn}
                </Styled_h2>

                <Input_Cont >
                  <Styled_input type='text' name='email' placeholder={language.email} onChange={handleInputChange} onFocus={()=>setTouched({emailInputTouch: true})} onBlur={()=>setTouched({emailInputTouch: false})} />

                  {!touched.emailInputTouch ? (
                    <TemporaryMessage 
                    type={2} 
                    isVisible={errors.email ? true : false} 
                    message={language.errorInvalidEmail}
                    timeout={1500}
                    left={'50%'}
                    top={'50%'}
                    />
                  ) : null}
                </Input_Cont>

                <Input_Cont >
                  <Styled_input type='password' name='password' placeholder={language.password} onChange={handleInputChange} onFocus={()=>setTouched({passwordInputTouch: true})} onBlur={()=>setTouched({passwordInputTouch: false})} />
                </Input_Cont>
                
                <Styled_button type='submit'>
                  {language.btn}
                </Styled_button>

                <Styled_em fontSize={'.9rem'}>
                  {language.dontAccount}
                  <Styled_a  fontSize={'.9rem'} onClick={()=>handleAuthMode('singup')}>
                    {language.singUp}
                  </Styled_a>
                </Styled_em>

                <div style={{'display': 'flex', 'flex-direction': 'column', 'gap': '.2rem'}} >
                  <Styled_a fontSize={'.8rem'} onClick={()=>handleAuthMode('singup') }>
                    {language.passwordRecovery}
                  </Styled_a>
                  <Styled_a  fontSize={'.8rem'} onClick={()=>handleAuthMode('singup')}>
                    {language.tokenRecovery}
                  </Styled_a>
                </div>
                  
                <Styled_div onClick={()=>navigate('/')} >
                  <Icon name='arrow-left-short' size='1.6rem' color={theme.primaryColor} />
                  <Styled_btn>{language.goBackBtn}</Styled_btn>
                </Styled_div>

                {serverResponse.showMessage && (
                  <TemporaryMessage 
                    type={serverResponse.messageType} 
                    isVisible={true} 
                    message={serverResponse.message} 
                    timeout={serverResponse.timeout}
                    top={'50%'}
                    left={'50%'}
                  />
                )}
              </>
              )
            : (
              <>
                <Styled_h2>
                  {language.singUp}
                </Styled_h2>
                
                <Styled_input type='text' name='name' placeholder={language.name} onChange={handleInputChange} />

                <Input_Cont >
                  <Styled_input type='text' name='email' placeholder={language.email} onChange={handleInputChange} onFocus={()=>setTouched({emailInputTouch: true})} onBlur={()=>setTouched({emailInputTouch: false})} />

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
                </Input_Cont>

                <Styled_input type='password' name='password' placeholder={language.password} onChange={handleInputChange} />

                <Input_Cont >
                  <Styled_input type='password' name='rePassword' placeholder={language.repeatPassword} onChange={handleInputChange} onFocus={()=>setTouched({rePasswordInputTouch: true})} onBlur={()=>setTouched({rePasswordInputTouch: false})}  />

                  {!touched.rePasswordInputTouch ? (
                    <TemporaryMessage 
                    type={2} 
                    isVisible={errors.rePassword ? true : false} 
                    message={language.errorInvalidRePassword} 
                    left={'50%'}
                    top={'50%'}
                    timeout={1500}
                    />
                  ) : null}
                </Input_Cont>

                <Styled_button type='submit'>
                {language.createAccount}
                </Styled_button>
                <span>
                  <Styled_em>
                  {language.haveAccount} <Styled_a onClick={()=>handleAuthMode('login')}>{language.singIn}</Styled_a>
                  </Styled_em>
                </span>

                <Styled_div onClick={()=>navigate('/')} >
                  <Icon name='arrow-left-short' size='1.6rem' color={theme.primaryColor} />
                  <Styled_btn>{language.goBackBtn}</Styled_btn>
                </Styled_div>

                {serverResponse.showMessage && (
                  <TemporaryMessage 
                    type={serverResponse.messageType} 
                    isVisible={true} 
                    message={serverResponse.message} 
                    timeout={serverResponse.timeout}
                    top={'50%'}
                    left={'50%'}
                  />
                )}
              </>
            )
            }
        </Styled_form>
      )
    )
  
    



  /* Functions */
  //auth mode manage
  function handleAuthMode(mode){
  navigate(`/${mode}`)
  }

  //detect input changes
  function handleInputChange(event){
    const { value } = event.target
    const { name } = event.target

    if(name === 'name'){
      setInputValue(prevState=>({
        ...prevState,
        name: value
      }))
    }if(name === 'email'){
      setInputValue(prevState=>({
        ...prevState,
        email: value
      }))
    }if(name === 'password'){
      setInputValue(prevState=>({
        ...prevState,
        password: value
      }))
    }if(name === 'rePassword'){
      setInputValue(prevState=>({
        ...prevState,
        rePassword: value
      }))
    }
  }
  //register
  function sendNewUserToDb(event) {
    event.preventDefault();
    let resStatus = null

    if (!inputValue.name || !inputValue.email || !inputValue.password || !inputValue.rePassword){
      setServerResponse({
        message: language.error404,
        messageType: 2, 
        showMessage: true,
      })
      return
    }
    if (errors.name || errors.password || errors.rePassword || errors.email) {
      setServerResponse({
        message: language.error400,
        messageType: 2, 
        showMessage: true, 
      })
      return
    }
    
    fetch('http://localhost:4000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputValue),
  })
    .then((response) => {
      resStatus = response.status
      if(resStatus === 201){
        setServerResponse({
          message: language.messageSuccess,
          messageType: 0, 
          showMessage: true, 
        })
        setShowForm(false)
      }else{
        setServerResponse({
          message: language.messageError,
          messageType: 2, 
          showMessage: true, 
        })
        setVisible(true)
      }
    })
    .catch((error) => {
      setServerResponse({
        message: error,
        messageType: 2, 
        showMessage: true,
        timeout: 2000
      })
    });
  }

  //login
  function authUserInDb(event){
    event.preventDefault();
    let statusCodeResponse = null

    if (!inputValue.email || !inputValue.password){
      setServerResponse({
        message: language.error404,
        messageType: 2, 
        showMessage: true,
      })
      return
    }
    if (errors.password || errors.email) {
      setServerResponse({
        message: language.error400,
        messageType: 2, 
        showMessage: true, 
      })
      return
    }
    fetch('http://localhost:4000/login', {
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
          return
        }
        if(statusCodeResponse === 403){
          setServerResponse({
            message: language.errorUserNotAuthenticated,
            messageType: 2, 
            showMessage: true,
            timeout: 2500 
          })
          return
        }
        dispath(setUserLogged(data))
        navigate('/')
      })
      .catch((error) => {
        setServerResponse({
          message: error,
          messageType: 2, 
          showMessage: true,
          timeout: 1500 
        })
        return
      });
  }
}