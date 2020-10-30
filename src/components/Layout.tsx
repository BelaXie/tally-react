import styled from "styled-components";
import React from "react";
import Nav from "components/Nav";

const Wrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

const Layout = (props: any) => {
  return (
    <Wrapper>
      <Main>{props.children}</Main>
      <Nav />
    </Wrapper>
  );
};

export default Layout;
