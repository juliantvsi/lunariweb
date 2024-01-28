import { LoginForm, RegisterForm } from "../components";
import { useLocation } from 'react-router-dom';
import { Form_background  } from '../styles/Form';

export default function DinamicForm(){
  const location = useLocation();

  return(
    <Form_background>
      {location.pathname === '/login'
      ? <LoginForm handleInputChange={handleInputChange} />
      : <RegisterForm handleInputChange={handleInputChange} />}
    </Form_background>
  )

  ////## == Functions == ## // 
  //detect input changes
  function handleInputChange(event, setState){
    const { value } = event.target
    const { name } = event.target

    if(name === 'name'){
      setState(prevState=>({
        ...prevState,
        name: value
      }))
    }if(name === 'email'){
      setState(prevState=>({
        ...prevState,
        email: value
      }))
    }if(name === 'password'){
      setState(prevState=>({
        ...prevState,
        password: value
      }))
    }if(name === 'rePassword'){
      setState(prevState=>({
        ...prevState,
        rePassword: value
      }))
    }
  }
  //## xx Functions xx ## //

}