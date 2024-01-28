//Styles
import { StyledSearchbar, StyledInput, IconContainer, SearchBtn } from "../styles/Searchbar";
//Components
import { Icon } from "../components";
//State and react
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch, handleSearch } from "../reducers/productSlice";
import { useNavigate } from "react-router-dom";
/* ------------*/

export default function (){
  const [inSearch, setInSearch] = useState(0) ;
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSearchBtn(){
    inSearch === 0 ? setInSearch(1) : setInSearch(0)
  }
  const handleButtonClick = () => {
    dispatch(setSearch(searchValue))
    dispatch(handleSearch(true))
    let path = generateSearchLink(searchValue)
    navigate(path) 
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault()
      dispatch(setSearch(searchValue))
      dispatch(handleSearch(true))
      let path = generateSearchLink(searchValue)
      navigate(path) 
    }
  };
  function generateSearchLink(searchTerm) {
    const queryParams = encodeURIComponent(searchTerm);
    const searchLink = `/search?query=${queryParams}`;
    return searchLink;
  }

  return(
    <>
      <SearchBtn onClick={()=>handleSearchBtn()} >
        {inSearch === 0 ? <Icon  name='search' size='1rem' /> : <Icon name='x' size='1.6rem' /> }
      </SearchBtn>

      {inSearch === 1 ? 
        <StyledSearchbar>
          <span>Search product or brand: </span>
          <StyledInput type="text" placeholder='Ex: Dell monitor 24" ...' value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
        onKeyDown={handleKeyDown} />
          <IconContainer>
            <Icon name='search' size='1.2rem' functionClick={handleButtonClick} />
          </IconContainer>
        </StyledSearchbar> 
        : null }
    </>
  )
}

