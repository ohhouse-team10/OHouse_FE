import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/modules/comments";

import CommentCard from "./CommentCard";

export default function CommentList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const data = useSelector((state) => state.comments.comments);
  let newData = data&&data
  // 파라미터자리
  console.log(data);

  //   let DataSet = {
  //     profile_image: "imageUrl",
  //     nickname: "고양잉",
  //     content: "내집은 어디있낭",
  //     createdAt: "31분 전",
  //     isEditable: true,
  //   };

  return (
    <>
      {newData &&
        newData.map((item) => (
          <CommentCard
            key={item.id}
            id={item.id}
            //   profile_image={item.profile_image}
            nickname={item.nickname}
            content={item.content}
            //   createdAt={item.createdAt}
            isEditable={item.isEditable}
          />
        ))}
    </>
  );
}
