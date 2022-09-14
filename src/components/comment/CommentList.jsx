import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/modules/commentsSlice";

import CommentCard from "./CommentCard";

export default function CommentList(props) {
  const dispatch = useDispatch();

  const [pagingDataSet, setPagingDataSet] = useState([]);

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  const data = useSelector((state) => state.comments.comments);
  // let newData = data
  let newData = data && data.filter((element) => element.postId === 1);
  // 파라미터자리 filter

  // console.log(data);
  // console.log(props);

  let indexArr = [0, 1, 2, 3, 4];
  let pageIndex = [];
  pageIndex =
    props.page === 1
      ? indexArr
      : indexArr.map((item) => item + (props.page - 1) * 5);

  const pagingData = [];
  const dataFetching = () => {
    for (let i = 0; i < indexArr.length; i++) {
      if (newData[pageIndex[i]] !== undefined) {
        pagingData.push(newData[pageIndex[i]]);
      }
    }
    setPagingDataSet(pagingData);
  };

  // useEffect(() => {
  //   dataFetching()
  // }, []);

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
            postId={item.postId}
          />
        ))}
    </>
  );
}
