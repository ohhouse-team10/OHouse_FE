import React from "react";
import styled from "styled-components";

/** 폰트사이즈는 18, 패딩은 15px 10px가 기본입니다.
 * btnName : string -> 버튼 내부의 이름을 설정할 수 있습니다.
 * disabled : boolean -> 버튼 활성 비활성을 설정할 수 있습니다. true => 비활성, false => 활성
 */

const Button = ({fontSize = 18, btnName, disabled, padding = "15px 10px"}) => {
  return (
    <Btn disabled={disabled} padding={padding} fontSize={fontSize}>
      {btnName}
    </Btn>
  );
};

const Btn = styled.button`
  margin: 20px 0px;
  width: 100%;
  padding: ${(props) => props.padding};
  line-height: 20px;
  font-size: ${(props) => props.fontSize}px;
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
