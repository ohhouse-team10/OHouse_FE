import React, { useState, useEffect, useCallback } from 'react';
import {useDispatch,useSelector} from "react-redux"
import {getInfiniteList} from "../redux/modules/PostSlice";

const END_POINT = 'https://';
const useFetch = (page) => {
//list => 리덕스,post 로 사용해서 안씀 
//   const [list, setList] = useState([]);

  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const {last,totalPage}= useSelector(state => state.post);
  console.log(totalPage)
  console.log(last)


  //query API 요청 보내기
  const sendQuery = useCallback(async () => {
   
    try {
      
      let response = await dispatch(getInfiniteList(page));
      response = response.payload
      console.log(response)
      
   
    //   setList((prev) => [...new Set([...prev, ...response])]);
      setHasMore(page<=totalPage);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page]);

  useEffect(() => {
 if (!isLoading)
  {sendQuery()
 setIsLoading(true)}

  }, [sendQuery,page]);

  return { hasMore,
    // list,
    isLoading };
};
export default useFetch;