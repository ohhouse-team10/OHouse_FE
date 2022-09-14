import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../../redux/modules/commentsSlice";

import CommentCard from "./CommentCard";

export default function CommentList(props) {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const [pagingDataSet, setPagingDataSet] = useState([]);

  // 게시글 ID에 해당하는 댓글 목록만 호출
  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);
  const data = useSelector((state) => state.comments.comments);
  let newData = data && data.filter((element) => element.postId === 1);
  // 파라미터자리 filter

  // 데이터 인입보다 렌더링이 먼저될 떄 경우 처리
  useEffect(() => {
    if (newData !== undefined) {
      dataFetching();
      setLoading(false);
    } else {
    }
  }, [props.page,data]);

  // 한 페이지에 보여줄 배열들의 인덱스 & 데이터 패치
  let indexArr = [0, 1, 2, 3, 4];
  let pageIndex = [];
  pageIndex =
    props.page === 1
      ? indexArr
      : indexArr.map((item) => item + (props.page - 1) * 5);

  const pagingData = [];
  const dataFetching = () => {
    for (let i = 0; i < indexArr.length; i++) {
      if (newData[pageIndex[i]] === undefined) {
        break;
      } else {
        pagingData.push(newData[pageIndex[i]]);
      }
    }
    setPagingDataSet(pagingData);
  };

  return (
    <>
      {loading === true ? (
        <div>로딩중...</div>
      ) : (
        pagingDataSet &&
        pagingDataSet.map((item) => (
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
        ))
      )}
    </>
  );
}
