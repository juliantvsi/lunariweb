import { useParams } from 'react-router-dom';
import { useState } from 'react';

export default function () {
  const { token } = useParams() //captura el token del link
  const [ userName, setUserName ] = useState(null);
  const [ statusCode, setStatusCode ] = useState(null);

  function fetchingApi(){
    fetch(`http://localhost:4000/validate/${token}`)
    .then((response) => {
      setStatusCode(response.status)
      return response.json()
    })
    .then((data) => {
      setUserName(data.name)
    })
    .catch((error) => {
      console.log('Error:', error);
    });
  }

   fetchingApi()

 return (
   <>
    <div>
      {statusCode === 404 ? 'Error de validación, solicite un nuevo codigo aquí.' :  statusCode === 200 ? `usuario validado exitosamente, bienvenido a lunari, ${userName}!` : 'Error inesperado.' }
    </div>
   </>
 )
}