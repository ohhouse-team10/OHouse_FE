import React, {useState} from "react";
import styled from "styled-components";
import emptyheart from "../../image/emptyheart.png";
import heart from "../../image/heart.png";

import useFetch from "./UseFetch";
import {useRef} from "react";

const CommunityCard = () => {
  //무한
  const [pageNum, setPageNum] = useState(1);
  const {list, hasMore, isLoading} = useFetch(pageNum);
  const observerRef = useRef();
  const observer = (node) => {
    if (isLoading) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && hasMore) {
        console.log("하이", entry.isIntersecting, pageNum);
        setPageNum((page) => page + 1);
      }
    });
    node && observerRef.current.observe(node);
  };
  // 데이터 불러오기
  //  const dispatch = useDispatch();
  //  const {post} = useSelector ((state) =>state.post)
  //  console.log("하이",post)
  //  useEffect(() => {
  //   dispatch(getHouseList());
  // }, []);
  //좋아요 기능
  const [like, setLike] = useState(true);
  const [joinCount, setJoinCount] = useState(0);
  const likeHandler = (e) => {
    e.preventDefault();
    setJoinCount(joinCount + 1);
    setLike(!like);
    // axios.post("/post", { postId: id });
  };
  const cencelHandler = (e) => {
    e.preventDefault();
    if (joinCount > 0) {
      setJoinCount(joinCount - 1);
    }
    setLike(!like);
    // axios.post("/post", { postId: id });
  };
  return (
    <Wrapper>
      <Div className="col-sm-4 col-xs-12">
        {list.map((post) => (
          <Card className="card" key={post.id} post={post}>
            <Media className="media">
              <div className="media-left">
                <img
                  src="https://i.pinimg.com/564x/29/f6/df/29f6dfff21b5e71169245e389ced72bd.jpg"
                  alt="Placeholder image"
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "30px",
                  }}
                />
              </div>
              <div className="media-content">
                <h4 style={{margin: "1px"}}>sooong{post.nickname}</h4>
                <h>@soonger</h>
              </div>
            </Media>
            <div className="card-image">
              <Img
                src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
                alt="Placeholder image"
              />
            </div>
            <Media className="media">
              <div className="media-left">
                {like ? (
                  <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
                ) : (
                  <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
                )}
                {post.like_num}
              </div>
              <div className="media-content"></div>
            </Media>
            <Media className="media">
              <div className="media-left">{post.statusMessage}</div>
              <div className="media-content"></div>
            </Media>
          </Card>
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
export default CommunityCard;
const Media = styled.div`
  display: flex;
  margin: 5px;
`;
const Img = styled.img`
  width: 330px;
  height: 330px;
  background-size: cover;
  border-radius: 10px;
  max-height: 100%;
`;
const Div = styled.div`
  overflow: hidden;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  margin: 22px;
  position: relative;
`;
const Card = styled.div`
  flex-wrap: wrap;
  width: 30%;
  flex-direction: column;
  align-content: flex-start;
  margin-right: 25px;
  margin-left: 7px;
  margin-bottom: 15px;
  overflow: hidden;
`;
const JoinBtn = styled.img`
  width: 30px;
`;
const Wrapper = styled.div`
  height: 100%;
`;
