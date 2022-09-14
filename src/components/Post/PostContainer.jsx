import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Selectbox from "../Post/Selectbox";
import Textbox from "../Post/Textbox";
import Button from "../Layout/Button";
import { _addPost } from "../../redux/modules/PostSlice";

const PostContainer = () => {
  const dispatch = useDispatch();
  const [type, setType] = useState("");
  const [style, setStyle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  const typeInfo = (type) => {
    setType(type);
  };
  const styleInfo = (style) => {
    setStyle(style);
  };
  const contentInfo = (content) => {
    setContent(content);
  };
  const imgInfo = (img) => {
    setImg(img);
  };
  const addPost = {
    // style: style, BE요청후에 추가
    // type: type,
    image: img,
    content: content,
  };

  const addClickHandler = () => {
    dispatch(_addPost(addPost));
    console.log("_addPost요청", addPost);
  };

  return (
    <Wraper>
      <Selectbox typeInfo={typeInfo} styleInfo={styleInfo} />
      <Textbox contentInfo={contentInfo} imgInfo={imgInfo} />
      <BtnBox onClick={addClickHandler}>
        <Button btnName={"올리기"} />
      </BtnBox>
    </Wraper>
  );
};

export default PostContainer;

const Wraper = styled.div`
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
  bottom: -55px;
  width: 100px;
`;
