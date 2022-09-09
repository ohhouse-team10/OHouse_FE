import React from "react";
import styled from "styled-components";
import logo from "../../image/ohou_logo.PNG";

const RegisterHeader = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`;
const Logo = styled.img`
  position: absolute;
  width: 110px;
  height: 50px;
  top: 10px;
  left: 10px;
`;

export default RegisterHeader;
