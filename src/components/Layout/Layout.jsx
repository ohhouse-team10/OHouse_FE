import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Layout = ({ childeren }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{childeren}</main>
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div``;
