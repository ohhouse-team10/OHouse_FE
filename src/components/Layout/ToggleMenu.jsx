import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useNavigate} from "react-router-dom";

const ToggleMenu = () => {
  /** REACT ROUTER DOM */
  const navigate = useNavigate();

  return (
    <Wrapper
      variants={ToggleAnimation}
      initial="start"
      animate="end"
      exit="exit"
    >
      <Items>
        <Item>
          <Icon>
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 36 36"
              width="36"
              height="36"
            >
              <rect
                x="6.54"
                y="3.59"
                width="27"
                height="29"
                rx="2.5"
                transform="rotate(4 6.54 3.6)"
                fill="#DBDBDB"
                stroke="#000"
                stroke-linejoin="round"
              ></rect>
              <rect
                x="2.5"
                y="1.5"
                width="27"
                height="29"
                rx="2.5"
                fill="#fff"
                stroke="#000"
                stroke-linejoin="round"
              ></rect>
              <rect
                x="5"
                y="4"
                width="22"
                height="22"
                rx="1"
                fill="#FFE2C7"
              ></rect>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 7l5 .45v3.5l-5-.45V7zm0 4.5V15l5 .45v-3.5l-5-.45zm6 .55v3.5l5 .45v-3.5l-5-.45zm5-.55V8l-5-.45v3.5l5 .45z"
                fill="#fff"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 19l22 2v7L5 26v-7z"
                fill="#E6A87C"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 3.45h5v16l-5 4v-20z"
                fill="#F1C8A3"
              ></path>
            </svg>
          </Icon>
          <Content onClick={() => navigate("/post")}>
            <Title>사진/동영상 올리기</Title>
            <SubTitle>우리 집의 공간과 나의 일상을 기록해 보세요.</SubTitle>
          </Content>
        </Item>
      </Items>
    </Wrapper>
  );
};

export default ToggleMenu;

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 70px;
  right: 8px;
  opacity: 1;
  visibility: visible;
  z-index: 900;
`;

const Items = styled.div`
  position: relative;
  padding: 8px;
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(218, 221, 224);
  border-radius: 6px;
  box-shadow: rgb(63 71 77 / 20%) 0px 4px 10px 0px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: rgb(255, 255, 255);
  border-radius: 2px;
  word-break: keep-all;
  white-space: nowrap;
  font-size: 15px;
  line-height: 0;
  outline: none;

  cursor: pointer;
`;

const Icon = styled.div`
  position: relative;
`;

const Content = styled.div`
  margin-left: 12px;
`;

const Title = styled.div`
  font-size: 15px;
  font-weight: bold;
  line-height: 21px;
  color: rgb(47, 52, 56);
`;

const SubTitle = styled.div`
  margin: 4px 0px 0px;
  font-size: 12px;
  line-height: 16px;
  color: rgb(130, 140, 148);
`;

const ToggleAnimation = {
  start: {opacity: 0, y: -10},
  end: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -10, transition: {duration: 0.2}},
};
