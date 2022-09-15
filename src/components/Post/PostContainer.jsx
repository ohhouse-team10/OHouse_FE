import React from "react";
import {useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";

import Selectbox from "../Post/Selectbox";
import Textbox from "../Post/Textbox";
import Button from "../Layout/Button";
import {_addPost} from "../../redux/modules/PostSlice";
import {useNavigate} from "react-router-dom";

const PostContainer = () => {
  const navigate = useNavigate();
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

  // BE요청 후 수정 / 추가

  const addPost = {
    style: style,
    type: type,
    content: content,
  };

  const addClickHandler = () => {
    // console.log("addPost", addPost);
    let formData = new FormData();
    formData.append(
      "data",
      new Blob([JSON.stringify(addPost)], {type: "application/json"})
    );

    formData.append("file", img);

    // console.log("formData", formData);
    dispatch(_addPost(formData));

    navigate("/community");
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
