/* styles */
import { Styled_ul, Styled_li, Submenu,Styled_span } from "../styles/CategoryMenu";
/* state */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory, setMenuActive } from '../reducers/menuSlice';
/* components and funcions */
import { useNavigate } from "react-router-dom";
/* ----------------------- */

export default function CategoryMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoriesList = { technology: ["monitor", "cpu", "mouse", "keyboard"] };

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    dispatch(setMenuActive(false));
    navigate(`/section/${category}`);
  };

  const handleMenuHover = () => {
    setIsMenuOpen(true);
  };

  return (
    <Styled_ul>

      {Object.keys(categoriesList).map((category, id) => <Styled_span key={id} onMouseEnter={handleMenuHover}>{category}</Styled_span>)}

      {isMenuOpen ? (
        <Submenu >
        {categoriesList.technology.map((category, id) => <Styled_li key={id} onClick={() => handleCategoryClick(category)} >{category}</Styled_li>)}
        </Submenu>
      ) : null}
    </Styled_ul>
  );
}