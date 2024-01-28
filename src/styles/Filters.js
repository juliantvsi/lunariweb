import styled from "styled-components";
import theme from "../theme";

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: .5rem;
  `
export const StyledSelect = styled.select`
  outline: none;
  border: 2px solid ${theme.primaryColor};
  border-radius: 4px;
  background: transparent;
  padding: .2rem;
`;

export const StyledOption = styled.option`
  padding: .3rem;
  border: 1px solid ${theme.secondaryColor};
`;