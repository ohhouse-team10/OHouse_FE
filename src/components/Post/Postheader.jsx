import React from "react";
import styled from "styled-components";
import text_logo from "../../image/ohou_text_logo.PNG";
import { useNavigate } from "react-router-dom";

const Postheader = () => {
  const navigate = useNavigate();

  return (
    <Postheaderbox>
      <Logo
        src={text_logo}
        onClick={() => [
          navigate(`/`),
          alert(
            "페이지를 벗어나시겠습니까? \n이 페이지를 벗어자면 작성한 내용은 모두 삭제됩니다. "
          ),
        ]}
      />
      <Addbutton onClick={() => navigate(`/`)}>
        <span>올리기</span>
      </Addbutton>
    </Postheaderbox>
  );
};

export default Postheader;

const Postheaderbox = styled.div`
  height: 80px;
  line-height: 80px;
  display: block;
`;
const Logo = styled.img`
  margin-top: 1.5%;
  margin-left: 8%;
  /* white-space: pre-line; */
`;
const Addbutton = styled.button`
  float: right;
  cursor: pointer;
  touch-action: manipulation;
  margin-top: 2%;
  margin-right: 10%;
  border: none;
  position: relative;
  width: auto;
  transition: background-color 0.1s ease 0s, opacity 0.1s ease 0s;
  padding: 11px 45px 12px;
  background-color: rgb(53, 197, 240);
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  border-radius: 4px;
`;
