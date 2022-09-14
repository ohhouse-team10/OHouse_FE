import React from 'react';
import styled from "styled-components";
import { useState } from 'react';


const DetailCard = () => {
 const { id } = useParams();




//팔로우토글 손봐야함
const [follow, setFollow] = useState(true);
const [followCount, setFollowCount] = useState(false);

const followeHandler = (e) => {
  e.preventDefault();
  setFollowCount(followCount +1);
//   setFollowCount(followCount == isFollow);
  setFollow(!follow);
  // axios.post("/post", { postId: id });
};

const cancelfollowHandler = (e) => {
  e.preventDefault();
  if (followCount > 0) {
    setFollowCount(followCount -1);
    // setFollowCount(followCount == isFollow);
  }
  setFollow(!follow);
  // axios.post("/post", { postId: id });
};







    return (
     
     <Card className="card-image" >
        <br/>
        <br/>
        <Textcard>
        <Font>평수</Font>&nbsp;
        < Stick>❘</ Stick>&nbsp;
        <Font>주거형태</Font>&nbsp;
        < Stick>❘</ Stick>&nbsp;
        <Font>스타일</Font>&nbsp;
         </Textcard>

        <Img
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/166266591662644543.jpeg?gif=1&w=1080&webp=1"
          alt="Placeholder image"
        />
        <Textcard style={{marginBottom:"40px"}}>
         (코멘트 부분) 😎😎😎
        </Textcard>

        <BorderLine class="border">
        <ProfileLayout >
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
             닉네임
            </h3>

          </div>
          <h6 >@soonger</h6>
        
        </div>
           

      </ProfileLayout>
         <div style={{float:"right" , marginLeft:'auto'}}>
            {follow ? (
                <Follow onClick={followeHandler}>
                        <h5 >＋팔로우</h5>
                </Follow>
                ) : (
                <UnFollow  onClick={cancelfollowHandler}>
                    
                    <h5> ✓ 팔로잉</h5>
                </UnFollow>
                )}
                </div>
             </BorderLine>

                </Card>
                
    );
};


export default DetailCard;
const BorderLine = styled.div`
  list-style: none;
  display: flex;
  padding: 11px;
  border-top-style: solid;

  border-width: 1.5px;
  border-color: #e4e3e3;
  height: 40px;

`;
const ProfileLayout = styled.div`
  display: flex;
  margin: 5px;
  overflow: hidden;
  height: 40px;
  position: relative;
`;

const Img = styled.img`
  
  width: 100%;
 
margin: auto;
margin-top: 15px;
margin-bottom: 50px;
  background-size: cover;
  border-radius: 10px;
  display: flex;
justify-content: center;
 align-items : center;
  
`;
const Textcard = styled.div`


display: flex;
margin: auto;
`;

const Card = styled.div`

  margin: auto;
  width: 100%;
 height: 100%;

`;
const Stick = styled.h1`
color: #dfdfdf;
font-size: 17px;
`;
const Font = styled.h1`
color: #7f7f7f;
font-size: 15px;
margin-top:2px ;
`;

const Follow = styled.button`
float: right;
  font-size: 14px;
  width: 90px;
  height: 100%;
 
  font-weight: bold;
 position: relative;
  background-color:  #10bbff;
  border: 0;
  border-radius: 4px;
  outline: 0;
  color: white;
  &:hover {
    opacity: 0.5;
  }
`;

const UnFollow = styled.button`
float: right;
height: 100%;
  font-size: 14px;
  width: 90px;
  font-weight: bold;
  color: #878787;
  background-color: transparent;
  border: 1px;
  border-radius: 4px;
  position: relative;
  border-color: #b7b7b7;
  border-style: solid;
  border-width: 1px;
  &:hover {
    opacity: 0.5;
  }

`;
