import React, {useState,useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import CommunityCard from "./CommunityCard";
import useFetch from "../../hooks/useFetch";
import {getInfiniteList} from "../../redux/modules/PostSlice"
import {useRef} from "react";
import { initial } from "../../redux/modules/PostSlice";
const CommunityCardList = () => {
  //무한스크롤 구현
  const [pageNum, setPageNum] = useState(0);
  const observerRef = useRef();
  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        //둘이 확인이 되면 페이지 넘겨줌
        setPageNum((page) => page + 1);
      }
    });
    node && observerRef.current.observe(node);
  };
  //데이터 불러오기
  const dispatch = useDispatch();
  const {post: posts} = useSelector((state) => state.post);
  //초기화진행 포스트 슬라이스 리듀서 불러옴
   useEffect(() => {
    dispatch(initial());
    console.log("초기화진행",pageNum)
   }, []);


//    useEffect(() => {
//     dispatch(getInfiniteList());
// }, []);

  const {_, hasMore, isLoading} = useFetch(pageNum);
  return (
    <Wrapper>
      <Div className="col-sm-4 col-xs-12">
        {posts.map((post) => (
          <CommunityCard key={post.post_id} post={post} />
        ))}
      </Div>
      <div
        ref={observer}
        style={{
          zIndex: "999",
          color: "blue",
          height: "20px",
          width: "100%",
        }}
      />
    </Wrapper>
  );
};
export default CommunityCardList;
const Div = styled.div`
  overflow: hidden;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 22px;
  position: relative;
`;
const Wrapper = styled.div`
  height: 100%;
`;