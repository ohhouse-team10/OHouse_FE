import React from "react";
import styled from "styled-components";

const MyPageContainer = ({children}) => {
  return <Container>{children}</Container>;
};

export default MyPageContainer;

const Container = styled.div``;
