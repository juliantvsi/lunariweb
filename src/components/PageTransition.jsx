import { PageContainer } from "../styles/PageTransition";

export default function PageTransition({ children }){
  return (
    <CSSTransition
      classNames="page"
      timeout={1000}
      unmountOnExit
    >
      <PageContainer>
        {children}
      </PageContainer>
    </CSSTransition>
  );
}