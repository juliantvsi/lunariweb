import { Logo } from '../styles/Logo';
import { Styled_div, Styled_container } from '../styles/EmailRegisterTemplate';

export default function EmailRegisterTemplate(){
  const username= 'laloo'

  return (
    <Styled_div>
      <Styled_container>
        <Logo src="/src/assets/images/logo/logo.png" alt="Logotipo de la marca Lunari" />
        <h1>Bienvenido, {username}!</h1>
      </Styled_container>
      <p>Gracias por registrarte en nuestro sitio.</p>
      <p>para confirmar el registro haga click <button>aqui!!</button> </p>
    </Styled_div>
  );
};