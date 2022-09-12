import React from "react";
import styled from "styled-components";

const MyPageContainer = ({children}) => {
  return <Container>{children}</Container>;
};

export default MyPageContainer;

const Container = styled.div`
  position: relative;
  margin: 50px auto;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%);
  padding: 50px;
  color: #292929;

  width: 1136px;
  max-width: 100%;
  min-height: 1px;
  box-sizing: border-box;
`;
