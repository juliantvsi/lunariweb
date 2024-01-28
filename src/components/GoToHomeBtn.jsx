import { BtnGoHome } from '../styles/GoToHome';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearSearch } from '../reducers/productSlice';
import { useNavigate } from 'react-router-dom';



export default function (){
  const dispath = useDispatch();
  const navigate = useNavigate();

  function handleNavigateHome(){
    dispath(clearSearch())
    navigate('/')
  }

  return(
    <BtnGoHome onClick={handleNavigateHome} >Go to Home</BtnGoHome>
  )
}

