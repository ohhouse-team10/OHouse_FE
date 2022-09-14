import React, { Suspense } from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";


import "./pagenation.css";
import CommentList from "./CommentList";

import { addComments, getComments } from "../../redux/modules/commentsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Pagination from "react-js-pagination";

export default function Comment() {
  const param = useParams();
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);
  const [commentInput, setCommentInput] = useState("");
  const [allCommentsCnt, setAllCommentsCnt] = useState(1);

  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  const commentList = useSelector((state) => state.comments.comments);
  let newList =
    commentList && commentList.filter((element) => element.postId === 1);
  // id는 파라미터자리

  useEffect(() => {
    setAllCommentsCnt(newList && newList.length);
  });

  const inputHandle = (e) => {
    setCommentInput(e.target.value);
    commentInput.length > 0 ? setDisabled(false) : setDisabled(true);
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
    setDisabled(true);
    document.getElementById("commentEnter").value = "";
  };

  return (
    <CommentLayout>
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
              placeholder="칭찬과 격려의 댓글은 작성자에게 큰 힘이 됩니다 :)"
            />
            <ButtonStyle onClick={addComment} type="button" disabled={disabled}>
              입력
            </ButtonStyle>
          </InputBox>
        </FormStyle>
        {/* <Suspense> */}
          <CommentList page={page} />
        {/* </Suspense> */}
        <Pagination
          activePage={page}
          // itemsCountPerPage={5}
          totalItemsCount={allCommentsCnt === undefined ? 1 : allCommentsCnt}
          // totalItemsCount={50}
          pageRangeDisplayed={5}
          prevPageText={"<"}
          nextPageText={">"}
          onChange={handlePageChange}
        />
      </section>
    </CommentLayout>
  );
}

const CommentLayout = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: 1136px;
  max-width: 100%;
  box-sizing: border-box;
  min-height: 1px;
`;

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
  max-width: 90%;
  min-width: 30%;
  width: 1000px;
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
