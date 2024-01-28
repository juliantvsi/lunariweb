import { FiltersContainer, StyledSelect, StyledOption } from '../styles/Filters';
import { useSelector, useDispatch } from 'react-redux';
import { setOrder } from '../reducers/productSlice';


export default function Filters(){
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(setOrder(selectedValue))
  };

  return(
    <FiltersContainer >
      <label htmlFor="opciones">Sort by:</label>
      <StyledSelect id="opciones" name="opciones" onChange={handleSelectChange}>
        <StyledOption value="lowToHigh">Price: low to high</StyledOption>
        <StyledOption value="highToLow">Price: high to low</StyledOption>
      </StyledSelect>
    </FiltersContainer>
  )
}

