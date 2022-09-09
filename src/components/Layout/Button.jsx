import React from "react";
import styled from "styled-components";

const Button = ({btnName, disabled}) => {
  return <Btn disabled={disabled}>{btnName}</Btn>;
};

const Btn = styled.button`
  margin: 20px 0px;
  width: 100%;
  padding: 15px 10px;
  line-height: 20px;
  font-size: 17px;
  min-height: 50px;
  background-color: ${(props) => (props.disabled ? "#95a5a6" : "#35c5f0")};
  border-color: ${(props) => (props.disabled ? "#95a5a6" : "#35c5f0")};
  color: #fff;
  user-select: none;
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  border-width: 1px;
  border-style: solid;
  border-image: initial;
  text-decoration: none;
  transition: color 0.1s ease 0s, background-color 0.1s ease 0s,
    border-color 0.1s ease 0s;
  border-radius: 4px;
`;

export default Button;
