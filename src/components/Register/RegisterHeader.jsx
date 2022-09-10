import React from "react";
import styled from "styled-components";
import Logo from "../Layout/Logo";

const RegisterHeader = () => {
  return (
    <Wrapper>
      <LogoBox>
        <Logo width={110} height={50} />
      </LogoBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;

const LogoBox = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export default RegisterHeader;
