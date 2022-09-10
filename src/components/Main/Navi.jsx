import React from "react";
import styled from "styled-components";

const Navi = () => {
  return (
    <Div class="menu">
      <li>
        <A href="">홈</A>
      </li>
      <li>
        <A href="">팔로잉</A>
      </li>
      <li>
        <A href="">사진</A>
      </li>
      <li>
        <A href="">집들이</A>
      </li>
    </Div>
  );
};

export default Navi;

//스타일 컴포넌츠
const Div = styled.div`
  list-style: none;
  display: flex;
  padding: 11px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-width: 1.5px;
  border-color: #e4e3e3;
  margin: 10px;
`;
const A = styled.a`
  font-size: 20px;
  text-decoration: none;
  margin-right: 54px;
  color: #484747;
  position: relative;

  :hover {
    color: #009dff;
  }
  ::before {
    content: "";
    height: 2px;
    width: 0;
    background-color: #fff;
    border-radius: 10px;
    transition: 0.3s;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  :hover::before {
    width: 100%;
    background-color: #00c8ff;
    color: #00c8ff;
  }
`;
