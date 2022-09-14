import React from "react";
import styled from "styled-components";
import heart from "../../image/heart.png";
import emptyheart from "../../image/emptyheart.png";
import fillbookmark from "../../image/bookmarkfill.png";
import emptybookmark from "../../image/bookmark.png";
import comment from "../../image/comment.png";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CommunityCard = ({post}) => {
  const navigate = useNavigate();

  const {
    thumbnail,
    nickname,
    like_num,
    statusMessage,
    isFollow,
    content,
    post_id,
    isLike,
  } = post;

  // const data = {
  //    nickname:nickname,
  //    like_num:like_num,
  //    statusMessage:statusMessage,
  //    isFollow : isFollow,
  //    content :content,
  //    post_id

  // };

  //팔로우토글
  const [follow, setFollow] = useState(true);
  const [followCount, setFollowCount] = useState(false);

  const followeHandler = (e) => {
    e.preventDefault();
    setFollowCount(followCount == isFollow);
    setFollow(!follow);
    // axios.post("/post", { postId: id });
  };

  const cancelfollowHandler = (e) => {
    e.preventDefault();
    if (followCount > 0) {
      setFollowCount(followCount == isFollow);
    }
    setFollow(!follow);
    // axios.post("/post", { postId: id });
  };

  //하트토글

  //  const likeHandler = (e) => { e.preventDefault()
  //  const updateLike = { id, like: !like }
  //   dispatch(__updateMusic(updateLike)) if(!like)alert("liked!") };

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

  //북마크토글
  const [bookmark, setBookmark] = useState(true);

  const bookHandler = (e) => {
    e.preventDefault();
    setBookmark(!bookmark);
    // axios.post("/post", { postId: id });
  };

  const cancelbookHandler = (e) => {
    e.preventDefault();
    setBookmark(!bookmark);
    // axios.post("/post", { postId: id });
  };

  return (
    <Card className="card">
      <Media className="media">
        <div className="media-left">
          <img
          
            src="https://i.pinimg.com/564x/29/f6/df/29f6dfff21b5e71169245e389ced72bd.jpg"
            alt="Placeholdser image"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "30px",
            }}
          />
        </div>
        <div className="media-content">
          <div style={{display: "flex"}}>
            <h3 style={{margin: "1px", fontSize: "18px", fontWeight: "bold"}}>
              {nickname}
            </h3>

            {follow ? (
              <Follow onClick={followeHandler}>팔로우</Follow>
            ) : (
              <Follow style={{color: "gray"}} onClick={cancelfollowHandler}>
                팔로잉
              </Follow>
            )}
            {followCount == isFollow}
          </div>
          <h>@soonger{post_id}</h>
        </div>
      </Media>


      <span onClick={() => navigate("/detail")}>
      <div className="card-image" style={{overflow: "hidden"}}>
        <Img
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
          alt="Placeholder image"
        />
      </div>
      </span>



      <Buttons>
        <Media className="media">
          <div className="media-left" style={{display: "flex"}}>
            {like ? (
              <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
            ) : (
              <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
            )}

            {/* {like ? ( <Like onClick={likeHandler}>♥️</Like> 
) : (
   <Like onClick={likeHandler}>♡</Like> )} */}

            <div style={{margin: "6px"}}>{like_num + joinCount}</div>
          </div>
        </Media>
        <Media className="media">
          <div className="media-left">
            {bookmark ? (
              <JoinBtn src={emptybookmark} onClick={bookHandler}></JoinBtn>
            ) : (
              <JoinBtn src={fillbookmark} onClick={cancelbookHandler}></JoinBtn>
            )}
          </div>
        </Media>

        <Media className="media">
          <div className="media-left">
            <CommentBtn src={comment} onClick={() => navigate("/comment")} />
          </div>
          <div className="media-content"></div>
        </Media>
      </Buttons>

      <Media className="media">
        <div className="media-left" style={{margin: "6px"}}>
          {content}
        </div>
        <div className="media-content"></div>
      </Media>
    </Card>
  );
};
export default CommunityCard;
const Media = styled.div`
  display: flex;
  margin: 5px;
  overflow: hidden;
`;
const Img = styled.img`
  overflow: hidden;
  width: 330px;
  height: 330px;
  background-size: cover;
  border-radius: 10px;
  max-height: 100%;
  transition: all 0.2s linear;
  :hover {
    transform: scale(1.1);
  }
`;

const Card = styled.div`
  flex-wrap: wrap;
  width: 30%;
  flex-direction: column;
  align-content: flex-start;
  margin-right: 25px;
  margin-left: 7px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 4px 15px 4px 4px;
`;

const JoinBtn = styled.img`
  width: 30px;
`;
const CommentBtn = styled.img`
  width: 33px;
`;
const Follow = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #00b3f9;
  background-color: transparent;
  border: 0;
  outline: 0;
  &:hover {
    opacity: 0.5;
  }
`;

const Wrapper = styled.div`
  height: 100%;
`;