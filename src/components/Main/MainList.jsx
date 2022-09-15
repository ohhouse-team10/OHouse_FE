import React, {useState, useEffect} from "react";
import {getInfiniteList } from "../../redux/modules/PostSlice";
import MainRecommendCard from "./MainRecommendCard";
import {useDispatch, useSelector} from "react-redux";
const MainList = () => {


 const dispatch = useDispatch();
const {post} = useSelector((state) => state.post);
console.log(post)

     useEffect(() => {
      dispatch( getInfiniteList ());
  }, []);




    return (
        <div>
         {post.map((post) => (
         <MainRecommendCard  key={post.post_id} post={post}/>
         )).slice(1, 2)}
        </div>
    );
};

export default MainList;