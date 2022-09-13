import React, {useState, useEffect, useCallback} from "react";
const END_POINT = "https://";
const useFetch = (page) => {
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  //query API 요청 보내기
  const sendQuery = useCallback(async () => {
    const URL = `http://localhost:3001/post?_limit=6&_page=${1}`;
    try {
      setIsLoading(true);
      const response = await (await fetch(URL)).json();
      console.log("하이", response);
      if (!response) {
        throw new Error(`서버에 오류가 있습니다.`);
      }
      setList((prev) => [...new Set([...prev, ...response])]);
      setHasMore(response.length > 0);
      setIsLoading(false);
    } catch (e) {
      throw new Error(`오류입니다. ${e.message}`);
    }
  }, [page]);
  useEffect(() => {
    sendQuery();
  }, [sendQuery, page]);
  return {hasMore, list, isLoading};
};
export default useFetch;
