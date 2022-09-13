import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import { useState } from "react";
import { useRef } from "react";
import axios from "axios";
import CommunityCard from "./CommunityCard";
import { getHouseList } from "../../redux/modules/PostSlice";

const Infinite = () => {
    const [houseList, setHouseList ] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const loader = useRef(null);
    const PAGE_LIMIT = 50;
  
    const getHouseList  = () => {
        setIsLoading(true);
      axios
        .get(`http://localhost:3001/post?_page=${pageNumber}&_limit=10`)
        .then(response => {
          setIsLoading(false);
          setHouseList(items => [...items, ...response.data]);
          setHasMore(pageNumber !== PAGE_LIMIT);
        })
        .catch(error => console.warn(error));
    };
  
    useEffect(() => {
        getHouseList ();
    }, [pageNumber]);
  
    const onIntersect = entries => {
      entries.forEach(element => {
        if (element.isIntersecting && hasMore) {
          setPageNumber(prev => prev + 1);
        }
      });
    };
  
    useEffect(() => {
      const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0,
      };
      const observer = new IntersectionObserver(onIntersect, options);
      observer.observe(loader.current);
      return () => observer.disconnect();
    }, [loader]);
  
    return (
      <div className="content-container">
        {houseList.map(item => (
          <CommunityCard  key={item.id} item={item} />
        ))}
        <div ref={loader} className="loader">
          {isLoading && "Loading..."}
        </div>
      </div>
    );
  };
  
  export default Infinite;