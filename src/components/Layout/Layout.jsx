import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Layout = ({children, visible = true}) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      {visible ? <Footer /> : null}
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  height: calc(100vh - 45px);
`;
