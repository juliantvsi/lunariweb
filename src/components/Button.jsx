import { StyledButton } from "../styles/Button";

export default function({value, functionClick}){
  
  return (
    <StyledButton onClick={functionClick}>
      {value}
    </StyledButton>
  )
};