import React from "react";
import styled from "styled-components";

const MyPageLayout = ({children}) => {
  return <Container>{children}</Container>;
};

export default MyPageLayout;

const Container = styled.div``;
