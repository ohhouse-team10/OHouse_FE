import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

import CommentList from "./CommentList";

import { addComments, getComments } from "../../redux/modules/comments";
import { useDispatch, useSelector } from "react-redux";

const FormStyle = styled.form`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin: 16px 0px 24px;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 7px;
  margin-right: 12px;
  border-radius: 100%;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex: 1 0 0%;
  -webkit-box-align: center;
  line-height: 0;
  box-sizing: border-box;
  border: 1px solid rgb(194, 200, 204);
  border-radius: 4px;
  display: block;
  padding: 0px 16px;
  cursor: text;
  position: relative;
  width: 100%;
  height: 45px;
  &:hover {
    background-color: rgb(248, 246, 246);
  }
  &:focus {
    border: 1px solid rgb(141, 207, 255);
  }
`;
const InputStyle = styled.input`
  max-width: 500px;
  width: 500px;
  height: 39px;
  float: left;
  margin: auto;

  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
  }
`;

const ButtonStyle = styled.button`
  width: 45px;
  height: 43px;
  float: right;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 16px;
  font-weight: bold;
  color: rgb(53, 197, 240);
  &:disabled {
    color: rgb(196, 196, 196);
  }
`;

export default function Comment() {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);
  const [commentInput, setCommentInput] = useState("");
  const [allCommentsCnt, setAllCommentsCnt] = useState(0);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  const commentList = useSelector((state) => state.comments.comments);
  let newList = commentList;
  console.log(newList);

  useEffect(() => {
    setAllCommentsCnt(newList && newList.length);
  });

  const inputHandle = (e) => {
    commentInput.length > 1 ? setDisabled(false) : setDisabled(true);
    setCommentInput(e.target.value);
  };

  let data = {
    nickname: "닉네임",
    content: commentInput,
    isEditable: true,
    postId: 1,
  };

  const addComment = () => {
    console.log("댓글 추가!");
    dispatch(addComments(data));
    document.getElementById("commentEnter").value = "";
    setDisabled(true);
    dispatch(getComments());
  };

  return (
    <>
      <hr style={{ height: "1px", backgroundColor: "rgb(234, 237, 239)" }} />
      <section>
        <div>
          <p>
            댓글 <span>{allCommentsCnt}</span>
          </p>
        </div>
        <FormStyle>
          <Image src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQb2EH%2FbtrKdRqtkYJ%2FiuflvkiIkWB0wvFxrhkqD1%2Fimg.png" />
          <InputBox>
            <InputStyle
              id="commentEnter"
              onChange={inputHandle}
              placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다. :)"
            />
            <ButtonStyle onClick={addComment} type="button" disabled={disabled}>
              입력
            </ButtonStyle>
          </InputBox>
        </FormStyle>
        <CommentList />
      </section>
    </>
  );
}
