import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

<<<<<<< HEAD
const Layout = ({children, header = true, footer = true}) => {
  return (
    <LayoutWrapper>
      {header ? <Header /> : null}
      <Main>{children}</Main>
      {footer ? <Footer /> : null}
=======
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
>>>>>>> commentsList/yohan
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div``;

const Main = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1136px;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
`;
