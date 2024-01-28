import { Styled_input } from '../styles/Input';

export default function Input({type, name, placeholder, onChangeFunction, onBlurFunction, onFocusFunction}){
  return(
    <Styled_input
    type={type} 
    name={name}
    placeholder={placeholder}
    onChange={onChangeFunction} 
    onBlur={onBlurFunction}
    onFocus={onFocusFunction}
    />
  )
}