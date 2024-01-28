import { StyledIcon, StyledBtnOnClick } from '../styles/Icon';

export default function Icon({ name, size, colorHover, functionClick, color }) {
  const iconClass = `bi bi-${name}`;

  return (
    <StyledBtnOnClick onClick={functionClick} >
      <StyledIcon className={iconClass} size={size} colorHover={colorHover} color={color}></StyledIcon>
    </StyledBtnOnClick>
  );
}