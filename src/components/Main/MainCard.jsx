import React, {useState} from "react";
import styled from "styled-components";
import emptyheart from "../../image/emptyheart.png";
import heart from "../../image/heart.png";
const MainCard = () => {
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
        <Card class="card">
          <Media class="media">
            <div class="media-left">
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
            <div class="media-content">
              <h4 style={{margin: "1px"}}>soOoO0ng</h4>
              <h>@soonger</h>
            </div>
          </Media>

          <div class="card-image">
            <Img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
              alt="Placeholder image"
            />
          </div>
          <Media class="media">
            <div class="media-left">
              {like ? (
                <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
              ) : (
                <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
              )}
              {joinCount}
            </div>
            <div class="media-content"></div>
          </Media>
        </Card>
        <Card class="card">
          <Media class="media">
            <div class="media-left">
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
            <div class="media-content">
              <h4 style={{margin: "1px"}}>soOoO0ng</h4>
              <h>@soonger</h>
            </div>
          </Media>

          <div class="card-image">
            <Img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
              alt="Placeholder image"
            />
          </div>
          <Media class="media">
            <div class="media-left">
              {like ? (
                <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
              ) : (
                <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
              )}
              {joinCount}
            </div>
            <div class="media-content"></div>
          </Media>
        </Card>
        <Card class="card">
          <Media class="media">
            <div class="media-left">
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
            <div class="media-content">
              <h4 style={{margin: "1px"}}>soOoO0ng</h4>
              <h>@soonger</h>
            </div>
          </Media>

          <div class="card-image">
            <Img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
              alt="Placeholder image"
            />
          </div>
          <Media class="media">
            <div class="media-left">
              {like ? (
                <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
              ) : (
                <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
              )}
              {joinCount}
            </div>
            <div class="media-content"></div>
          </Media>
        </Card>
        <Card class="card">
          <Media class="media">
            <div class="media-left">
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
            <div class="media-content">
              <h4 style={{margin: "1px"}}>soOoO0ng</h4>
              <h>@soonger</h>
            </div>
          </Media>

          <div class="card-image">
            <Img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
              alt="Placeholder image"
            />
          </div>
          <Media class="media">
            <div class="media-left">
              {like ? (
                <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
              ) : (
                <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
              )}
              {joinCount}
            </div>
            <div class="media-content"></div>
          </Media>
        </Card>
        <Card class="card">
          <Media class="media">
            <div class="media-left">
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
            <div class="media-content">
              <h4 style={{margin: "1px"}}>soOoO0ng</h4>
              <h>@soonger</h>
            </div>
          </Media>

          <div class="card-image">
            <Img
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
              alt="Placeholder image"
            />
          </div>
          <Media class="media">
            <div class="media-left">
              {like ? (
                <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
              ) : (
                <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
              )}
              {joinCount}
            </div>
            <div class="media-content"></div>
          </Media>
        </Card>
      </Div>
    </Wrapper>
  );
};

export default MainCard;

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
  width:30%;
  flex-direction: column;
  align-content: flex-start;
  margin-right: 30px;
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
