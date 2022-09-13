import React from "react";
import styled from "styled-components";

/** Custom Item 은 추후에 추가를... */
export const ToggleMenuItem = ({
  hasIcon,
  hasSubTitle,
  onClickFunction,
  title,
  subTitle,
}) => {
  return (
    <Item>
      {hasIcon ? (
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
              strokeLinejoin="round"
            ></rect>
            <rect
              x="2.5"
              y="1.5"
              width="27"
              height="29"
              rx="2.5"
              fill="#fff"
              stroke="#000"
              strokeLinejoin="round"
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
      ) : null}
      <Content onClick={onClickFunction}>
        <Title>{title}</Title>
        {hasSubTitle ? <SubTitle>{subTitle}</SubTitle> : null}
      </Content>
    </Item>
  );
};

export default ToggleMenuItem;

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
