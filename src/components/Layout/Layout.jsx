import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  height: calc(100vh - 45px);
`;
