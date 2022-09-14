import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Selectbox from "../Post/Selectbox";
import Textbox from "../Post/Textbox";
import Button from "../Layout/Button";

const PostContainer = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [style, setStyle] = useState("");
  const [content, setContent] = useState("");

  const typeInfo = (type) => {
    setType(type);
  };
  const styleInfo = (style) => {
    setStyle(style);
  };
  const contentInfo = (content) => {
    setContent(content);
  };

  console.log("setType =", type);
  console.log("setStyle =", style);
  console.log("setContent =", content);

  const addPost = [
    // type,style,content (+file) 다 담아놓고 한번에 post
  ];

  useEffect(() => {
    // dispatch(보내는slice(addPost));
  }, []);

  return (
    <Wraper>
      <Selectbox typeInfo={typeInfo} styleInfo={styleInfo} />
      <Textbox contentInfo={contentInfo} />
      <BtnBox>
        <Button btnName={"올리기"} />
      </BtnBox>
    </Wraper>
  );
};

export default PostContainer;

const Wraper = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;

  color: #424242;
  line-height: 1;
  letter-spacing: -0.4px;
  font-size: 13px;
  margin-top: 3%;
  padding-bottom: 1%;
  height: 100%;
`;
const BtnBox = styled.div`
  position: absolute;
  right: 30px;
  bottom: -50px;
  width: 100px;
`;
