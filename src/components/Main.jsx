import { Detail, Section, IntoSections, Filters, EmailRegisterTemplate } from "../components";
import { StyledMain } from "../styles/Main";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function MyComponent() {
  const { isActive } = useSelector((state) => state.productInfo);
  const { categorySelected } = useSelector((state) => state.menu);
  const { order, search } = useSelector((state) => state.productInfo);

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      {isActive && <Detail />}
      {path === "/" && (
        <>
          <StyledMain>
            <Section title="Top rated" category="topRated" />
          </StyledMain>
          <IntoSections />
          <StyledMain>
            <Section title="Best sellers" category="bestSellers" />
          </StyledMain>
        </>
      )}
      {path === "/search" && search.isActive && (
        <>
          <Filters />
          <StyledMain>
            <Section title={`Search results: ${search.value}`} category="search" order={order} />
          </StyledMain>
        </>
      )}
      {path.startsWith("/section/") && categorySelected && (
        <>
          <Filters />
          <StyledMain>
            <Section title={categorySelected} category={categorySelected} order={order} />
          </StyledMain>
        </>
      )}
    </>
  );
}
