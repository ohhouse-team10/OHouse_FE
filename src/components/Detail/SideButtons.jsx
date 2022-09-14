import React from 'react';
import heart from "../../image/heart.png";
import emptyheart from "../../image/emptyheart.png";
import fillbookmark from "../../image/bookmarkfill.png";
import emptybookmark from "../../image/bookmark.png";
import styled from "styled-components";
import { useState } from 'react';
import { margin } from '@mui/system';
import comment from "../../image/comment.png";

const SideButtons = () => {
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
        <Layout>
           
            <ButtonLayout >
                {like ? (
              <JoinBtn src={emptyheart} onClick={likeHandler}></JoinBtn>
            ) : (
              <JoinBtn src={heart} onClick={cencelHandler}></JoinBtn>
            )}
            
          </ButtonLayout >
          
          <div style={{textAlign:"center"}}>
         
          {joinCount}
          </div>
       
          <BookLayout style={{marginTop:"20px"}}>
          <div className="media-left">
            {bookmark ? (
              <JoinBtn src={emptybookmark} onClick={bookHandler}></JoinBtn>
            ) : (
              <JoinBtn src={fillbookmark} onClick={cancelbookHandler}></JoinBtn>
            )}
            
          </div>
            
          
          </BookLayout >
    <BorderLine class="border">
          <ButtonLayout style={{marginTop:"40px"}}>
      
          <div className="media-left">
            <CommentBtn src={comment} />
          </div>
          
          <div className="media-content"></div>
    
     </ButtonLayout>
  </BorderLine>
      
            
             

        </Layout>
        
    );
};

export default SideButtons;


const Layout = styled.div`

margin-top: 60px;
height: 40px;
position: sticky;
width: 60px;
margin-left: 30px;
`


const ButtonLayout = styled.button`
position: sticky;
float: right;
font-size: 14px;
margin-bottom:5px;
margin-top: 10px;
width: 60px;
height: 60px;
font-weight: bold;
color: #878787;
background-color: transparent;
border: 1px;
border-radius: 50px;
position: relative;
border-color: #b7b7b7;
border-style: solid;
border-width: 1px;
&:hover {
    opacity: 0.5;
  }
`;

const JoinBtn = styled.img`
  width: 30px;
  margin-top: 5px;
 
`;


const BookLayout = styled.button`
float: right;
height: 100%;
  font-size: 14px;
  margin-bottom:5px;
  margin-top: 10px;
  width: 60px;
  height: 60px;
  font-weight: bold;
  color: #878787;
  background-color: transparent;
  border: 1px;
  border-radius: 50px;
  position: relative;
  border-color: #b7b7b7;
  border-style: solid;
  border-width: 1px;

  &:hover {
    opacity: 0.5;
  }
`;

const BorderLine = styled.div`

  border-bottom-style: solid;
  border-width: 1.5px;
  border-color: #e4e3e3;
  height:100px;

`;
const CommentBtn = styled.img`
  width: 33px;
`;
