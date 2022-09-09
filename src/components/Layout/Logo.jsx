import React from "react";
import logo from "../../image/ohou_logo.PNG";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Logo = ({width = 147, height = 50}) => {
  const nav = useNavigate();
  return (
    <LogoImg
      src={logo}
      width={width}
      height={height}
      onClick={() => nav("/")}
    />
  );
};

const LogoImg = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export default Logo;
