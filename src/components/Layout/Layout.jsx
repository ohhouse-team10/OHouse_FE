import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, header = true, footer = true}) => {
  return (
    <LayoutWrapper>
      {header ? <Header /> : null}
      <main>{children}</main>
      {footer ? <Footer /> : null}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  height: calc(100vh - 45px);
`;
